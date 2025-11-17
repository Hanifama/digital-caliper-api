import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import { getCellValue } from './helpers/getCellValue';

@Injectable()
export class SheetService {
  async importDataFromExcel<T>(file: Express.Multer.File): Promise<T[]> {
    try {
      const workbook: XLSX.WorkBook = XLSX.read(file.buffer, {
        type: 'buffer',
      });
      const workSheet: XLSX.WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
      return XLSX.utils.sheet_to_json(workSheet);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  exportDataToExcel<T>(data: T[], name: string): Buffer {
    const workSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, workSheet, name);
    const buffer: Buffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'buffer',
    });
    return buffer;
  }

  async importQcPlanExcel(file: Express.Multer.File): Promise<any[]> {
    try {
      const workbook = new Workbook();
      await workbook.xlsx.load(file.buffer as any);

      const sheet = workbook.worksheets[0];
      if (!sheet) throw new Error('Sheet pertama tidak ditemukan.');

      const results: Array<Record<string, any>> = [];
      let emptyCount = 0;
      const MAX_EMPTY = 10;

      sheet.eachRow((row, rowNumber) => {
        if (rowNumber <= 4) return;

        const cells = row.values as any[];

        const isEmpty = cells.every(
          (cell) =>
            cell === null || cell === undefined || String(cell).trim() === '',
        );

        if (isEmpty) {
          emptyCount++;
          if (emptyCount >= MAX_EMPTY) return;
          return;
        } else {
          emptyCount = 0;
        }

        const sequence_no = getCellValue(cells[1]);
        const batchB = getCellValue(cells[2]);
        const batchC = getCellValue(cells[3]);
        const product = getCellValue(cells[31]);
        const specifications = getCellValue(cells[32]);
        const sizeVal = getCellValue(cells[38]);
        const std_grade = getCellValue(cells[40]);
        const brand_merek = getCellValue(cells[41]);

        let batchId: string | null = null;

        if (batchB && batchC) {
          batchId = `${batchB} ${batchC}`.trim();
        }

        if (!batchId) return;

        const obj: Record<string, any> = {
          sequence_no,
          batch_id: batchId,
          product,
          specifications,
          size: sizeVal,
          std_grade,
          brand_merek,
        };

        results.push(obj);
      });

      return results;
    } catch (err) {
      throw new Error(`Gagal baca QC Plan Excel (ExcelJS): ${err}`);
    }
  }

  exportQcPlanHeaderOnly(): Buffer {
    // Step 1: Definisikan struktur header (2 baris menggunakan AOA)
    const headers = [
      ['No', 'BATCH ID', 'Profile', '', '', 'Produk', 'Specification', 'Brand'],
      [
        '', // No
        '', // Batch ID
        'Size',
        'Kg/m Nominal',
        'Kg/m 3%',
        '', // Produk
        '', // Spec
        '', // Brand
      ],
    ];

    // Step 2: 1 contoh data sebagai template
    const exampleData = [
      [
        1,
        '1212131 BE',
        'IWF 248x124',
        10.32,
        417.2,
        'H-BEAM',
        'SNI BjP 41 / JIS G3101 SS400',
        'RSI',
      ],
    ];

    // Step 3: Buat workbook baru dan tambahkan worksheet dari header
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(headers);

    // Step 4: Tambahkan contoh data di bawah header
    XLSX.utils.sheet_add_aoa(worksheet, exampleData, { origin: -1 });

    // Step 5: Merge cell pada header agar tampilan lebih rapi
    worksheet['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } }, // No
      { s: { r: 0, c: 1 }, e: { r: 1, c: 1 } }, // BATCH ID
      { s: { r: 0, c: 2 }, e: { r: 0, c: 4 } }, // Profile (gabung 3 kolom)
      { s: { r: 0, c: 5 }, e: { r: 1, c: 5 } }, // Produk
      { s: { r: 0, c: 6 }, e: { r: 1, c: 6 } }, // Specification
      { s: { r: 0, c: 7 }, e: { r: 1, c: 7 } }, // Brand
    ];

    // Step 6: Atur lebar kolom agar tabel tidak berantakan
    worksheet['!cols'] = [
      { wch: 5 }, // No
      { wch: 15 }, // Batch ID
      { wch: 15 }, // Size
      { wch: 12 }, // Kg/m Nominal
      { wch: 12 }, // Kg/m 3%
      { wch: 15 }, // Produk
      { wch: 25 }, // Spec
      { wch: 10 }, // Brand
    ];

    // Step 7: Tambahkan worksheet ke workbook dan ubah ke buffer Excel
    XLSX.utils.book_append_sheet(workbook, worksheet, 'QC_Plan');
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

    return buffer;
  }
}
