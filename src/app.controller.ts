import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    const message = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API - QCMS Caliper Digital</title>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Merriweather+Sans:wght@400;700&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'Merriweather Sans', Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
            text-align: center;
          }
          h1 {
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: 2em;
          }
          p {
            color: #34495e;
            margin: 10px 0;
            line-height: 1.5;
          }
          footer {
            margin-top: 30px;
            font-size: 0.85em;
            color: #2c3e50;
          }
          .highlight {
            color: #e67e22;
            font-weight: 700;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>${this.appService.getHello()}</h1>
          <p>Selamat datang di <span class="highlight">QCMS Caliper Digital</span></p>
          <p>Kelola data QC secara efektif dan cepat.</p>
        </div>
        <footer>
          QCMS Caliper Digital © 2025. All Rights Reserved.
        </footer>
      </body>
      </html>
    `;
    res.send(message);
  }
}
