import * as fs from 'fs';
import * as path from 'path';
import * as puppeteer from 'puppeteer';
import { Injectable } from '@nestjs/common';
import { PdfDataDto, PdfValue } from './dto/pdf-qc.dto';

@Injectable()
export class GeneratorService {
  async generatePdf(data: PdfDataDto): Promise<Buffer> {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    const imagePath = path.join(
      process.cwd(),
      'public/vectors/h-beam-shape.svg',
    );

    const imageBase64 = fs.readFileSync(imagePath).toString('base64');

    const colorClass = (dim: {
      value: PdfValue;
      status: 'passed' | 'not passed';
    }) => (dim.status === 'passed' ? 'text-gray-600' : 'text-red-600');

    const overallLabel = (status: 'passed' | 'not passed') =>
      status === 'passed' ? 'PASSED' : 'REJECT';

    const overallColor = (status: 'passed' | 'not passed') =>
      status === 'passed' ? 'text-green-700' : 'text-red-700';

    const html = `
    <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Wireframe (Black & White – Strong Borders)</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-white">
            <!-- Container -->
            <div class="w-full max-w-5xl h-full bg-white grid grid-cols-12 gap-0 border border-black">
                
                <!-- Left Info Panel -->
                <div class="col-span-3 grid grid-rows-3 border-r border-black">
                <!-- Time + PIC Section -->
                <div class="grid grid-rows-[auto_auto_1fr] border-b border-black">
                    <!-- PIC -->
                    <div class="px-4 py-2 text-center border-b border-black">
                    <div class="text-[10px] text-gray-600">PIC</div>
                    <div class="text-sm font-semibold whitespace-nowrap">${data.pic}</div>
                    </div>

                    <!-- QC DATE -->
                    <div class="px-4 py-2 text-center border-b border-black">
                    <div class="text-[10px] text-gray-600">Tanggal QC</div>
                    <div class="text-sm font-semibold">${data.qcDate}</div>
                    </div>

                    <!-- START & END TIME -->
                    <div class="grid grid-cols-2 divide-x divide-black">
                    <!-- START TIME -->
                    <div class="flex flex-col items-center justify-center py-3">
                        <p class="text-xs tracking-wide">START TIME</p>
                        <p class="text-2xl font-bold">${data.startTime}</p>
                    </div>
                    <!-- END TIME -->
                    <div class="flex flex-col items-center justify-center py-3">
                        <p class="text-xs tracking-wide">END TIME</p>
                        <p class="text-2xl font-bold">${data.endTime}</p>
                    </div>
                    </div>
                </div>

                <!-- Weight -->
                <div class="relative bg-[#B3ABAB] flex flex-col items-center justify-center border-b border-black">
                    <div class="absolute bg-white top-0 inset-x-0 text-center text-xs py-1 border-b border-black">Weight</div>
                    <div class="flex items-center justify-center h-full">
                    <p class="text-4xl font-bold">${data.weight}</p>
                    </div>
                    <div class="absolute bg-white bottom-0 inset-x-0 text-center text-xs py-1 border-t border-black">Kg/m</div>
                </div>

                <!-- Length + Size -->
                <div class="relative flex flex-col items-center justify-center text-center h-full">
                    <p class="text-xs tracking-wide">Length</p>
                    <p class="text-7xl font-bold leading-none">${data.length}</p>
                    <p class="text-xs mb-6">meter</p>
                    <div class="absolute bottom-0 inset-x-0 text-center text-xs py-2 border-t border-b border-black bg-white">
                    <span class="text-gray-600">Size :</span>
                    <span class="font-semibold">${data.size}</span>
                    </div>
                </div>
                </div>

                <!-- Right Content -->
                <div class="col-span-9 grid grid-rows-2">
                <!-- Main Display -->
                <div class="row-span-3 border-b border-black flex items-center justify-center">
                    <div class="relative w-full h-full flex items-center justify-center">

                    <!-- TOP DIMENSION -->
                    <div class="absolute top-[15%] left-1/2 -translate-x-1/2">
                        <div class="flex items-end justify-center gap-[11vw] text-center">
                        <div>
                            <span class="block text-[10px] text-gray-600 whitespace-nowrap">Tebal Flange Kiri Atas</span>
                            <span class="block text-sm font-semibold ${colorClass(data.dimensions.topLeft)}">${data.dimensions.topLeft.value}</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-gray-600 whitespace-nowrap">Lebar Web Atas</span>
                            <span class="block text-sm font-semibold ${colorClass(data.dimensions.topCenter)}">${data.dimensions.topCenter.value}</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-gray-600 whitespace-nowrap">Tebal Flange Kanan Atas</span>
                            <span class="block text-sm font-semibold ${colorClass(data.dimensions.topRight)}">${data.dimensions.topRight.value}</span>
                        </div>
                        </div>
                    </div>

                    <!-- LEFT DIMENSION -->
                    <div class="absolute left-[5%] top-1/2 -translate-y-1/2 text-center">
                        <div class="text-[10px] text-gray-600">Tinggi Flange Kiri</div>
                        <div class="text-sm font-semibold ${colorClass(data.dimensions.leftHeight)}">${data.dimensions.leftHeight.value}</div>
                    </div>

                    <!-- RIGHT DIMENSION -->
                    <div class="absolute right-[3%] top-1/2 -translate-y-1/2 text-center">
                        <div class="text-[10px] text-gray-600">Tinggi Flange Kanan</div>
                        <div class="text-sm font-semibold ${colorClass(data.dimensions.rightHeight)}">${data.dimensions.rightHeight.value}</div>
                    </div>

                    <!-- BOTTOM DIMENSION -->
                    <div class="absolute bottom-[15%] left-1/2 -translate-x-1/2">
                        <div class="flex items-end justify-center gap-[10vw] text-center">
                        <div>
                            <span class="block text-[10px] text-gray-600 whitespace-nowrap">Tebal Flange Kiri Bawah</span>
                            <span class="block text-sm font-semibold ${colorClass(data.dimensions.bottomLeft)}">${data.dimensions.bottomLeft.value}</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-gray-600 whitespace-nowrap">Lebar Web Bawah</span>
                            <span class="block text-sm font-semibold ${colorClass(data.dimensions.bottomCenter)}">${data.dimensions.bottomCenter.value}</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-gray-600 whitespace-nowrap">Tebal Flange Kanan Bawah</span>
                            <span class="block text-sm font-semibold ${colorClass(data.dimensions.bottomRight)}">${data.dimensions.bottomRight.value}</span>
                        </div>
                        </div>
                    </div>

                    <!-- IMAGE -->
                    <img src="data:image/svg+xml;base64,${imageBase64}" class="max-h-[60%] max-w-[60%] object-contain" />

                    <!-- INNER DETAILS -->
                    <div class="absolute left-[30%] top-[52%] text-center">
                        <div class="text-[10px] text-gray-600">Simetri Kanan</div>
                        <div class="text-xs font-semibold ${colorClass(data.dimensions.simetriRight)}">${data.dimensions.simetriRight.value}</div>
                    </div>
                    <div class="absolute right-[30%] top-[52%] text-center">
                        <div class="text-[10px] text-gray-600">Simetri Kiri</div>
                        <div class="text-xs font-semibold ${colorClass(data.dimensions.simetriLeft)}">${data.dimensions.simetriLeft.value}</div>
                    </div>
                    <div class="absolute top-[40%] left-1/2 -translate-x-1/2">
                        <div class="flex items-end justify-center gap-[5vw] text-center">
                        <div>
                            <span class="block text-[10px] text-gray-600 whitespace-nowrap">Tebal Web</span>
                            <span class="block text-xs font-semibold ${colorClass(data.dimensions.webLeft)}">${data.dimensions.webLeft.value}</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-gray-600 whitespace-nowrap">Tebal Web</span>
                            <span class="block text-xs font-semibold ${colorClass(data.dimensions.webCenter)}">${data.dimensions.webCenter.value}</span>
                        </div>
                        <div>
                            <span class="block text-[10px] text-gray-600 whitespace-nowrap">Tebal Web</span>
                            <span class="block text-xs font-semibold ${colorClass(data.dimensions.webRight)}">${data.dimensions.webRight.value}</span>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>

                <!-- Note Section -->
                <div class="row-span-1 border-t border-black">
                    <div class="grid grid-cols-5 text-center border-b border-black">
                    <div class="px-3 border-r border-l border-black">
                        <div class="text-[10px] text-gray-600 whitespace-nowrap">
                            Status
                        </div>
                        <div class="text-xs font-semibold whitespace-nowrap ${overallColor(data.statusOverall)}">
                            ${overallLabel(data.statusOverall)}
                        </div>
                    </div>
                    <div class="px-3 border-r border-black">
                        <div class="text-[10px] text-gray-600 whitespace-nowrap">No Sequence</div>
                        <div class="text-xs font-semibold">${data.sequenceNo}</div>
                    </div>
                    <div class="px-3">
                        <div class="text-[10px] text-gray-600 whitespace-nowrap">Potongan</div>
                        <div class="text-xs font-semibold">${data.qcPrefix}/${data.potongan}</div>
                    </div>
                    <div class="px-3 border-l border-black">
                        <div class="text-[10px] text-gray-600 whitespace-nowrap">Batch ID</div>
                        <div class="text-xs font-semibold">${data.batchId}</div>
                    </div>
                    <div class="px-3 border-l border-black">
                        <div class="text-[10px] text-gray-600 whitespace-nowrap">Lokasi</div>
                        <div class="text-xs font-semibold whitespace-nowrap">${data.lokasi}</div>
                    </div>                    
                </div>
                </div>
                </div>
            </div>
            </body>
        </html>
    `;

    await page.setContent(html, {
      waitUntil: 'networkidle0',
    });

    const pdfBuffer = await page.pdf({
      format: 'A5',
      landscape: true,
      printBackground: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm',
      },
    });

    await browser.close();
    return pdfBuffer;
  }
}
