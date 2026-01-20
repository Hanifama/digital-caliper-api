import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { User } from '../auth/entitities/user.entity';
import { PdfDataDto, PdfDimension, PdfValue } from './dto/pdf-qc.dto';

/** DIMENSION CODE MAP */
const DIMENSION_CODE_MAP = {
  topLeft: 't1',
  topCenter: 'H-top',
  topRight: 't3',

  webLeft: 't6',
  webCenter: 't5',
  webRight: 't7',

  simetriRight: 'b1-b2/2',
  simetriLeft: 'b3-b4/2',

  leftHeight: 'B1',
  rightHeight: 'B2',

  bottomLeft: 't2',
  bottomCenter: 'H-bottom',
  bottomRight: 't4',

  b1: 'b1',
  b2: 'b2',
  b3: 'b3',
  b4: 'b4',
} as const;

@Injectable()
export class QcPdfDataService {
  constructor(
    @InjectRepository(QcRecord)
    private readonly qcRecordRepo: Repository<QcRecord>,

    @InjectRepository(QcData)
    private readonly qcDataRepo: Repository<QcData>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async getPdfData(
    qcId: string,
    noSeq: number,
    pieceNo: string,
    userId: string,
  ): Promise<PdfDataDto> {
    /** 1️ USER + LOCATION */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });

    if (!user?.locationId) {
      throw new BadRequestException('User tidak punya location_id');
    }

    /** 2️ QC RECORD */
    const record = await this.qcRecordRepo.findOne({
      where: {
        qc_id: qcId,
        sequence_no: noSeq,
        piece_no: pieceNo,
        location_id: user.locationId,
      },
      relations: ['location'],
    });

    if (!record) {
      throw new NotFoundException('QC Record tidak ditemukan');
    }

    /** 3️ QC DATA */
    const raw = await this.qcDataRepo
      .createQueryBuilder('d')
      .select([
        'd.input_code AS code',
        'd.input_value AS value',
        'd.status AS status',
      ])
      .where('d.qc_id = :qcId', { qcId })
      .andWhere('d.sequence_no = :seq', { seq: noSeq })
      .andWhere('d.piece_no = :piece', { piece: pieceNo })
      .andWhere('d.location_id = :loc', { loc: user.locationId })
      .getRawMany();

    if (!raw.length) {
      throw new NotFoundException('QC Data kosong');
    }

    /** 4️ DETECT PREFIX (H / C / T) */
    const prefix = detectQcPrefix(raw.map((r) => r.code));

    const normalizeStatus = (status?: string): 'passed' | 'not passed' => {
      if (!status) return 'not passed';

      const normalized = status.trim().toLowerCase();

      return normalized === 'passed' ? 'passed' : 'not passed';
    };

    const normalizeOverallStatus = (
      status?: string,
    ): 'passed' | 'not passed' => {
      if (!status) return 'not passed';
      return status.trim().toLowerCase() === 'passed' ? 'passed' : 'not passed';
    };

    /** 5️ NORMALISASI DATA */
    const dataMap = new Map<
      string,
      { value: number; status: 'passed' | 'not passed' }
    >();

    raw.forEach((r) => {
      if (r.value !== null && r.value !== undefined) {
        dataMap.set(r.code, {
          value: Number(r.value),
          status: normalizeStatus(r.status),
        });
      }
    });

    const dashIfZero = (value?: number | null): PdfValue => {
      if (value === null || value === undefined) return '-';
      if (Number(value) === 0) return '-';
      return value;
    };

    const valByPattern = (code: string): PdfDimension => {
      const item = dataMap.get(`${prefix}.${code}`);
      if (!item) return { value: '-', status: 'not passed' };
      return { value: dashIfZero(item.value), status: item.status };
    };

    const time = (d?: Date) =>
      d
        ? d.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
          })
        : '-';

    const date = (d?: Date) => (d ? d.toLocaleDateString('id-ID') : '-');

    /** 6 MAPPING → PdfDataDto */
    return {
      pic: user.full_name ?? '-',
      qcDate: date(record.created_dt),

      startTime: time(record.start_dt),
      endTime: time(record.created_dt),

      weight: dashIfZero(record.weight),
      weightUnit: 'Kg/m',

      length: dashIfZero(record.length),
      lengthUnit: 'meter',

      size: record.size ?? '-',

      dimensions: {
        topLeft: valByPattern(DIMENSION_CODE_MAP.topLeft),
        topCenter: valByPattern(DIMENSION_CODE_MAP.topCenter),
        topRight: valByPattern(DIMENSION_CODE_MAP.topRight),

        leftHeight: valByPattern(DIMENSION_CODE_MAP.leftHeight),
        rightHeight: valByPattern(DIMENSION_CODE_MAP.rightHeight),

        simetriRight: valByPattern(DIMENSION_CODE_MAP.simetriRight),
        simetriLeft: valByPattern(DIMENSION_CODE_MAP.simetriLeft),

        bottomLeft: valByPattern(DIMENSION_CODE_MAP.bottomLeft),
        bottomCenter: valByPattern(DIMENSION_CODE_MAP.bottomCenter),
        bottomRight: valByPattern(DIMENSION_CODE_MAP.bottomRight),

        webLeft: valByPattern(DIMENSION_CODE_MAP.webLeft),
        webCenter: valByPattern(DIMENSION_CODE_MAP.webCenter),
        webRight: valByPattern(DIMENSION_CODE_MAP.webRight),

        b1: valByPattern(DIMENSION_CODE_MAP.b1),
        b2: valByPattern(DIMENSION_CODE_MAP.b2),
        b3: valByPattern(DIMENSION_CODE_MAP.b3),
        b4: valByPattern(DIMENSION_CODE_MAP.b4),
      },

      sequenceNo: String(record.sequence_no),
      potongan: record.piece_no,
      batchId: record.qc_id,
      lokasi: record.location?.name ?? '-',

      qcPrefix: prefix,
      statusOverall: normalizeOverallStatus(record.status_overall),
    };
  }
}

/** PREFIX DETECTOR */
const detectQcPrefix = (codes: string[]): 'H' | 'C' | 'T' => {
  for (const code of codes) {
    if (!code) continue;
    const prefix = code.split('.')[0];
    if (prefix === 'H' || prefix === 'C' || prefix === 'T') {
      return prefix;
    }
  }
  throw new BadRequestException('QC prefix tidak ditemukan (H / C / T)');
};
