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

    const colorStyle = (dim: {
      value: PdfValue;
      status: 'passed' | 'not passed';
    }) => {
      return dim.status === 'passed'
        ? 'color:#4b5563;' // gray
        : 'color:#dc2626;'; // red
    };

    const overallStyle = (status: 'passed' | 'not passed') => {
      return status === 'passed'
        ? 'color:#15803d;' // green
        : 'color:#b91c1c;'; // red
    };

    const overallLabel = (status: 'passed' | 'not passed') =>
      status === 'passed' ? 'PASSED' : 'REJECT';

    const html = `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wireframe PDF Report QC</title>
    </head>

    <body style="
        margin:0;
        background:#ffffff;
        display:flex;
        justify-content:center;
        align-items:center;
        font-family: Arial, Helvetica, sans-serif;
    ">

    <!-- CONTAINER UTAMA -->
    <div style="
        width:794px;
        height:555px;
        border:1px solid #000;
        background:#fff;
        display:flex;
    ">

    <!-- ================= PANEL KIRI ================= -->
    <div style="
        width:180px;
        border-right:1px solid #000;
        display:flex;
        flex-direction:column;
        height:100%;
    ">

        <!-- HEADER: PIC + TANGGAL -->
        <div style="border-bottom:1px solid #000; flex-shrink:0;">
            <!-- PIC -->
            <div style="padding:12px; text-align:center; border-bottom:1px solid #000;">
                <div style="font-size:10px; color:#6b7280; margin-bottom:4px;">PIC</div>
                <div style="font-size:12px; font-weight:600;">
                    ${data.pic}
                </div>
            </div>

            <!-- TANGGAL QC -->
            <div style="padding:12px; text-align:center; border-bottom:1px solid #000;">
                <div style="font-size:10px; color:#6b7280; margin-bottom:4px;">Tanggal QC</div>
                <div style="font-size:12px; font-weight:600;">
                    ${data.qcDate}
                </div>
            </div>

            <!-- WAKTU -->
            <div style="display:grid; grid-template-columns:1fr 1fr; border-bottom:1px solid #000;">
                <div style="padding:12px; text-align:center; border-right:1px solid #000;">
                    <div style="font-size:10px; color:#6b7280; margin-bottom:4px;">START TIME</div>
                    <div style="font-size:15px; font-weight:bold; line-height:1;">
                        ${data.startTime}
                    </div>
                </div>
                <div style="padding:12px; text-align:center;">
                    <div style="font-size:10px; color:#6b7280; margin-bottom:4px;">END TIME</div>
                    <div style="font-size:15px; font-weight:bold; line-height:1;">
                        ${data.endTime}
                    </div>
                </div>
            </div>
        </div>

        <!-- WEIGHT SECTION -->
        <div style="
            flex:1;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            padding:20px;
            border-bottom:1px solid #000;
            position:relative;
            min-height:140px;
            box-sizing:border-box;
            background:#b4b4b4;
        ">
            <div style="
                position:absolute;
                top:0;
                left:0;
                right:0;
                background:#fff;
                text-align:center;
                font-size:12px;
                padding:8px;
                border-bottom:1px solid #000;
                border-left:1px solid #000;
                border-right:1px solid #000;
                box-sizing:border-box;
            ">
                Weight
            </div>
            
            <div style="font-size:40px; font-weight:bold; color:#000;">
                ${data.weight}
            </div>
            
            <div style="
                position:absolute;
                bottom:0;
                left:0;
                right:0;
                background:#fff;
                text-align:center;
                font-size:12px;
                padding:8px;
                border-top:1px solid #000;
                border-left:1px solid #000;
                border-right:1px solid #000;
                box-sizing:border-box;
            ">
                Kg/m
            </div>
        </div>

        <!-- LENGTH SECTION -->
        <div style="
            flex:1;
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            align-items:center;
            padding-top:25px;
            position:relative;
            min-height:140px;
            box-sizing:border-box;
        ">
            <div style="font-size:10px; color:#6b7280; margin-bottom:8px;">Length</div>
            <div style="font-size:50px; font-weight:bold; line-height:1; margin-bottom:8px;">
                ${data.length}
            </div>
            <div style="font-size:14px; color:#6b7280;">meter</div>

            <!-- SIZE FOOTER -->
            <div style="
                position:absolute;
                bottom:0;
                left:0;
                right:0;
                border-top:1px solid #000;
                border-left:1px solid #000;
                border-right:1px solid #000;
                padding:14px;
                background:#fff;
                text-align:center;
                box-sizing:border-box;
            ">
                <div style="font-size:10px; color:#6b7280;">Size:</div>
                <div style="font-size:12px; font-weight:600;">${data.size}</div>
            </div>
        </div>

    </div>

    <!-- ================= PANEL KANAN ================= -->
    <div style="
        flex:1;
        display:flex;
        flex-direction:column;
        height:100%;
        min-width:0; 
    ">

        <!-- MAIN DISPLAY -->
        <div style="
            flex:1;
            position:relative;
            border-bottom:1px solid #000;
            overflow:hidden;
            min-height:0; 
        ">

            <div style="position:relative; width:100%; height:100%;">

                <!-- ===== TOP DIMENSION ===== -->
                <div style="
                    position:absolute;
                    top:70px;
                    left:50%;
                    transform:translateX(-50%);
                    z-index:10;
                ">
                    <div style="
                        display:flex;
                        justify-content:center;
                        gap:90px;
                        text-align:center;
                    ">
                        <div>
                            <div style="font-size:10px; color:#6b7280; white-space:nowrap;">
                                Tinggi Flange Kiri Atas
                            </div>
                            <div style="font-size:14px; font-weight:600; ${colorStyle(data.dimensions.topLeft)}">
                                ${data.dimensions.topLeft.value}
                            </div>
                        </div>
                        <div>
                            <div style="font-size:10px; color:#6b7280; white-space:nowrap;">
                                Lebar Web Atas
                            </div>
                            <div style="font-size:14px; font-weight:600; ${colorStyle(data.dimensions.topCenter)}">
                                ${data.dimensions.topCenter.value}
                            </div>
                        </div>
                        <div>
                            <div style="font-size:10px; color:#6b7280; white-space:nowrap;">
                                Tinggi Flange Kanan Atas
                            </div>
                            <div style="font-size:14px; font-weight:600; ${colorStyle(data.dimensions.topRight)}">
                                ${data.dimensions.topRight.value}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ===== LEFT DIMENSION ===== -->
                <div style="
                    position:absolute;
                    left:20px;
                    top:50%;
                    transform:translateY(-50%);
                    text-align:center;
                    z-index:10;
                ">
                    <div style="font-size:10px; color:#6b7280;">Tinggi Flange Kiri</div>
                    <div style="font-size:14px; font-weight:600; ${colorStyle(data.dimensions.leftHeight)}">
                        ${data.dimensions.leftHeight.value}
                    </div>
                </div>

                <!-- ===== RIGHT DIMENSION ===== -->
                <div style="
                    position:absolute;
                    right:20px;
                    top:50%;
                    transform:translateY(-50%);
                    text-align:center;
                    z-index:10;
                ">
                    <div style="font-size:10px; color:#6b7280;">Tinggi Flange Kanan</div>
                    <div style="font-size:14px; font-weight:600; ${colorStyle(data.dimensions.rightHeight)}">
                        ${data.dimensions.rightHeight.value}
                    </div>
                </div>

                <!-- ===== BOTTOM DIMENSION ===== -->
                <div style="
                    position:absolute;
                    bottom:70px;
                    left:50%;
                    transform:translateX(-50%);
                    z-index:10;
                ">
                    <div style="
                        display:flex;
                        justify-content:center;
                        gap:90px;
                        text-align:center;
                    ">
                        <div>
                            <div style="font-size:10px; color:#6b7280; white-space:nowrap;">
                                Tinggi Flange Kiri Bawah
                            </div>
                            <div style="font-size:14px; font-weight:600; ${colorStyle(data.dimensions.bottomLeft)}">
                                ${data.dimensions.bottomLeft.value}
                            </div>
                        </div>
                        <div>
                            <div style="font-size:10px; color:#6b7280; white-space:nowrap;">
                                Lebar Web Bawah
                            </div>
                            <div style="font-size:14px; font-weight:600; ${colorStyle(data.dimensions.bottomCenter)}">
                                ${data.dimensions.bottomCenter.value}
                            </div>
                        </div>
                        <div>
                            <div style="font-size:10px; color:#6b7280; white-space:nowrap;">
                                Tinggi Flange Kanan Bawah
                            </div>
                            <div style="font-size:14px; font-weight:600; ${colorStyle(data.dimensions.bottomRight)}">
                                ${data.dimensions.bottomRight.value}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ===== IMAGE ===== -->
                <img
                    src="data:image/svg+xml;base64,${imageBase64}"
                    style="
                        position:absolute;
                        top:50%;
                        left:50%;
                        transform:translate(-50%,-50%);
                        max-width:60%;
                        max-height:60%;
                        object-fit:contain;
                        z-index:5;
                    "
                />

               <!-- ===== INNER SIMETRI & B ===== -->
                <div style="
                    position:absolute;
                    top:53%;
                    left:0;
                    right:0;
                    display:flex;
                    justify-content:center; 
                    align-items:center;
                    text-align:center;
                    z-index:10;
                    gap: 45px;
                ">

                    <!-- ITEM 1: b2 -->
                    <div>
                        <div style="font-size:10px; color:#6b7280;">b2</div>
                        <div style="font-size:12px; font-weight:600; color:#6b7280;">
                            ${data.dimensions.b2.value}
                        </div>
                    </div>

                    <!-- ITEM 2: Simetri Kanan -->
                    <div>
                        <div style="font-size:10px; color:#6b7280;">Simetri Kanan</div>
                        <div style="font-size:10px; color:#6b7280;">b1-b2/2</div>
                        <div style="font-size:12px; font-weight:600; ${colorStyle(data.dimensions.simetriRight)}">
                            ${data.dimensions.simetriRight.value}
                        </div>
                    </div>

                    <!-- ITEM 3: Simetri Kiri -->
                    <div>
                        <div style="font-size:10px; color:#6b7280;">Simetri Kiri</div>
                        <div style="font-size:10px; color:#6b7280;">b3-b4/2</div>
                        <div style="font-size:12px; font-weight:600; ${colorStyle(data.dimensions.simetriLeft)}">
                            ${data.dimensions.simetriLeft.value}
                        </div>
                    </div>

                    <!-- ITEM 4: b4 -->
                    <div>
                        <div style="font-size:10px; color:#6b7280;">b4</div>
                        <div style="font-size:12px; font-weight:600; color:#6b7280;">
                            ${data.dimensions.b4.value}
                        </div>
                    </div>

                </div>

                <!-- ===== WEB & B1 B3 ===== -->
                <div style="
                    position:absolute;
                    top:40%;
                    left:50%;
                    transform:translateX(-50%);
                    z-index:10;
                ">
                    <div style="display:flex; gap:40px; text-align:center;">
                        
                        <div style="display:flex; align-items:center; gap:20px;">
                            <div>
                                <div style="font-size:10px; color:#6b7280;">b1</div>
                                <div style="font-size:12px; font-weight:600; color:#6b7280;">
                                    ${data.dimensions.b1.value}
                                </div>
                            </div>
                            <div>
                                <div style="font-size:10px; color:#6b7280;">Tebal Web</div>
                                <div style="font-size:12px; font-weight:600; ${colorStyle(data.dimensions.webLeft)}">
                                    ${data.dimensions.webLeft.value}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style="font-size:10px; color:#6b7280;">Tebal Web</div>
                            <div style="font-size:12px; font-weight:600; ${colorStyle(data.dimensions.webCenter)}">
                                ${data.dimensions.webCenter.value}
                            </div>
                        </div>

                        <div style="display:flex; align-items:center; gap:20px;">
                            <div>
                                <div style="font-size:10px; color:#6b7280;">Tebal Web</div>
                                <div style="font-size:12px; font-weight:600; ${colorStyle(data.dimensions.webRight)}">
                                    ${data.dimensions.webRight.value}
                                </div>
                            </div>
                            <div>
                                <div style="font-size:10px; color:#6b7280;">b3</div>
                                <div style="font-size:12px; font-weight:600; color:#6b7280;">
                                    ${data.dimensions.b3.value}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <!-- NOTE SECTION -->
        <div style="
            flex-shrink:0;
            border-top:1px solid #000;
        ">
            <div style="display:grid; grid-template-columns:repeat(5,1fr); text-align:center; height:100%;">
                <div style="border-right:1px solid #000; padding:12px; display:flex; flex-direction:column; justify-content:center;">
                    <div style="font-size:11px; color:#6b7280;">Status</div>
                    <div style="font-size:14px; font-weight:600; ${overallStyle(data.statusOverall)}">
                        ${overallLabel(data.statusOverall)}
                    </div>
                </div>
                <div style="border-right:1px solid #000; padding:12px; display:flex; flex-direction:column; justify-content:center;">
                    <div style="font-size:11px; color:#6b7280;">No Sequence</div>
                    <div style="font-size:14px; font-weight:600;">
                        ${data.sequenceNo}
                    </div>
                </div>
                <div style="padding:12px; display:flex; flex-direction:column; justify-content:center;">
                    <div style="font-size:11px; color:#6b7280;">Potongan</div>
                    <div style="font-size:14px; font-weight:600;">
                        ${data.qcPrefix}/${data.potongan}
                    </div>
                </div>
                <div style="border-left:1px solid #000; padding:12px; display:flex; flex-direction:column; justify-content:center;">
                    <div style="font-size:11px; color:#6b7280;">Batch ID</div>
                    <div style="font-size:14px; font-weight:600;">
                        ${data.batchId}
                    </div>
                </div>
                <div style="border-left:1px solid #000; padding:12px; display:flex; flex-direction:column; justify-content:center;">
                    <div style="font-size:11px; color:#6b7280;">Lokasi</div>
                    <div style="font-size:14px; font-weight:600; white-space:nowrap;">
                        ${data.lokasi}
                    </div>
                </div>
            </div>
        </div>

    </div>

    </div>

    </body>
    </html>
    `;

    await page.setContent(html, {
      waitUntil: 'load',
    });

    const pdfBuffer = await page.pdf({
      width: '794px',
      height: '559px',
      printBackground: true,
    });

    await browser.close();
    return Buffer.from(pdfBuffer);
  }
}
