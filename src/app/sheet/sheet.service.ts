import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';

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
      // Step 1: Baca workbook dan sheet pertama
      const workbook = XLSX.read(file.buffer, { type: 'buffer' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      // Step 2: Konversi sheet ke array 2D
      const raw = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: null,
      }) as any[][];

      if (raw.length < 5) {
        throw new Error(
          'Format Excel tidak sesuai. Harus ada minimal 5 baris.',
        );
      }

      // Step 3: Ambil header dan subheader, data mulai baris ke-5
      const headerRow = raw[2];
      const subHeaderRow = raw[3];
      const dataRows = raw.slice(4);

      // Step 4: Gabungkan header dan subheader
      const finalHeaders = headerRow.map((h, i) => {
        const top = (h ?? '').toString().trim();
        const sub = (subHeaderRow[i] ?? '').toString().trim();
        if (top && sub) return `${top} ${sub}`.trim();
        if (sub && !top) return sub;
        if (top && !sub) return top;
        return `__col${i}`;
      });

      console.log('🧩 FINAL DETECTION HEADERS:', finalHeaders);

      // Step 5: Cari index kolom penting
      const produkIndex = finalHeaders.findIndex(
        (h) => h.toLowerCase() === 'product',
      );
      if (produkIndex === -1)
        throw new Error('Kolom "Produk" tidak ditemukan di Excel.');

      const batchIndex = finalHeaders.findIndex((h) =>
        h.toLowerCase().includes('batch id'),
      );
      if (batchIndex === -1)
        throw new Error('Kolom "BATCH ID" tidak ditemukan di Excel.');
      const extraIndex = batchIndex + 1;

      // const remarksIndex = finalHeaders.findIndex(
      //   (h) => h.toLowerCase() === 'remarks',
      // );
      // const brandNearRemarksIndex =
      //   remarksIndex - 1 >= 0 ? remarksIndex - 1 : null;

      // Debug
      // console.log('📌 produkIndex:', produkIndex, '📌 batchIndex:', batchIndex, '📌 brandNearRemarksIndex:', brandNearRemarksIndex);

      // Step 6: Konversi dataRows ke JSON, gabungkan BATCH ID + kolom tambahan
      const jsonData = dataRows.map((row) => {
        const obj: Record<string, any> = {};

        const sequenceIndex = finalHeaders.findIndex(
          (h) => h.toLowerCase() === 'no',
        );

        // Cari index Size (di dekat PO dan Kg/m)
        const sizeIndex = finalHeaders.findIndex(
          (h) => h.toLowerCase() === 'size',
        );

        // Cari index Product (diapit CE & Specifications)
        const productIndexAlt = finalHeaders.findIndex(
          (h) => h.toLowerCase() === 'product',
        );

        const gradeIndex = finalHeaders.findIndex(
          (h) => h.toLowerCase() === 'grade',
        );
        const kgmIndex = finalHeaders.findIndex((h) =>
          h.toLowerCase().includes('kg/m'),
        );
        const brandIndex = finalHeaders.findIndex(
          (h) => h.toLowerCase() === 'brand',
        );
        const specIndex = finalHeaders.findIndex(
          (h) => h.toLowerCase() === 'specifications',
        );

        finalHeaders.forEach((key, i) => {
          let value = row[i];

          if (i === batchIndex) {
            const extraValue = row[extraIndex] ? ` ${row[extraIndex]}` : '';
            value = `${value ?? ''}${extraValue}`.trim();
            obj['batch_id'] = value;
          } else if (i === productIndexAlt) {
            obj['product'] = row[i]; // ambil Product sesuai lokasi CE & Specifications
          } else if (i === sizeIndex) {
            obj['size'] = row[i]; // ambil Size dekat PO/Kg/m
          } else if (i === sequenceIndex) {
            obj['sequence_no'] = row[i];
          } else if (i === gradeIndex) {
            obj['grade'] = row[i]; // tangkap Grade
          } else if (i === kgmIndex) {
            obj['kgm_nominal'] = parseFloat(row[i]) || null; // tangkap Kg/m
          } else if (i === brandIndex) {
            obj['brand_merek'] = row[i];
          } else if (i === specIndex) {
            obj['specifications'] = row[i];
          } else {
            obj[key] = row[i];
          }
        });

        return obj;
      });

      console.log('📝 SAMPLE DATA IMPORTED:', jsonData.slice(0, 2));

      // Step 7: Filter baris kosong
      const cleaned = jsonData.filter((r) =>
        Object.values(r).some((v) => v !== null && v !== ''),
      );

      // Debug
      // console.log('✅ TOTAL ROWS TERBACA:', cleaned.length);
      return cleaned;
    } catch (error) {
      throw new Error(`Gagal parsing QC Plan Excel: ${error}`);
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
