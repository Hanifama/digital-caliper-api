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
      const workbook = XLSX.read(file.buffer, { type: 'buffer' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      const raw = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: null,
      }) as any[][];

      if (raw.length < 5) {
        throw new Error(
          'Format Excel tidak sesuai. Harus ada minimal 5 baris.',
        );
      }

      const headerRow = raw[2];
      const subHeaderRow = raw[3];
      const dataRows = raw.slice(4);

      const finalHeaders = headerRow.map((h, i) => {
        const top = (h ?? '').toString().trim();
        const sub = (subHeaderRow[i] ?? '').toString().trim();
        if (top && sub) return `${top} ${sub}`.trim();
        if (sub && !top) return sub;
        if (top && !sub) return top;
        return `__col${i}`;
      });

      // Hanya ambil kolom yang diperlukan untuk mengurangi memory usage
      const neededColumns = [
        'No',
        'BATCH ID',
        'Material size',
        'Kg / m',
        'Product',
        'Specifications',
        'Dimension',
        'Size',
        'Grade',
        'Brand',
      ];

      const jsonData = dataRows.map((row, rowIndex) => {
        const obj: Record<string, any> = {};

        // Mapping kolom yang diperlukan saja (SISTEM LAMA)
        finalHeaders.forEach((key, i) => {
          if (!neededColumns.some((col) => key.includes(col))) return;

          let value = row[i];

          // Batch ID processing
          if (key.includes('BATCH ID')) {
            const extraValue = row[i + 1] ? ` ${row[i + 1]}` : '';
            value = `${value ?? ''}${extraValue}`.trim();
            obj['batch_id'] = value;
          }
          // Product - SKIP DULU, nanti kita override dengan value dari AE
          else if (key.includes('Product')) {
            // Jangan set dulu, nanti di override
          }
          // Size - SKIP DULU, nanti kita override dengan value dari AL
          else if (key.includes('Size')) {
            // Jangan set dulu, nanti di override
          }
          // Grade
          else if (key.includes('Grade')) {
            obj['grade'] = value;
          }
          // Kg/m
          else if (key.includes('Kg/m')) {
            obj['kgm_nominal'] = parseFloat(value) || null;
          }
          // Brand
          else if (key.includes('Brand')) {
            obj['brand_merek'] = value;
          }
          // Specifications
          else if (key.includes('Spec') || key.includes('Spek')) {
            obj['specifications'] = value;
          }
          // Sequence No
          else if (key.includes('No')) {
            obj['sequence_no'] = value;
          }
        });

        // PRODUCT dari kolom AE (index 30) - FIX!
        obj['product'] = row[30] ? row[30].toString().trim() : null;

        // SIZE dari kolom AL (index 37) - FIX!
        obj['size'] = row[37] ? row[37].toString().trim() : null;

        // Debug untuk beberapa baris pertama
        if (rowIndex < 3) {
          console.log(`🔍 Row ${rowIndex + 1}:`, {
            product: obj['product'],
            size: obj['size'],
            batch_id: obj['batch_id'],
          });
        }

        return obj;
      });

      // Filter baris kosong dengan criteria yang lebih spesifik
      const cleaned = jsonData.filter(
        (r) => r.batch_id || r.product || r.size, // minimal ada salah satu field penting
      );

      console.log(`📝 Data berhasil dibaca: ${cleaned.length} rows`);
      console.log(`✅ Mapping: PRODUCT ← kolom 30 (AE), SIZE ← kolom 37 (AL)`);

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
