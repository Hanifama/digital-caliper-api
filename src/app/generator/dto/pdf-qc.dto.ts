export type PdfValue = number | '-';
export interface PdfDimension {
  value: PdfValue;
  status: 'passed' | 'not passed';
}

export interface PdfDataDto {
  pic: string;
  qcDate: string;
  startTime: string;
  endTime: string;

  weight: PdfValue;
  weightUnit: string;
  length: PdfValue;
  lengthUnit: string;
  size: string;

  dimensions: {
    topLeft: PdfDimension;
    topCenter: PdfDimension;
    topRight: PdfDimension;

    leftHeight: PdfDimension;
    rightHeight: PdfDimension;

    simetriRight: PdfDimension;
    simetriLeft: PdfDimension;

    bottomLeft: PdfDimension;
    bottomCenter: PdfDimension;
    bottomRight: PdfDimension;

    webLeft: PdfDimension;
    webCenter: PdfDimension;
    webRight: PdfDimension;

    b1: PdfDimension;
    b2: PdfDimension;
    b3: PdfDimension;
    b4: PdfDimension;
  };

  sequenceNo: string;
  potongan: string;
  batchId: string;
  lokasi: string;

  qcPrefix: 'H' | 'C' | 'T';
  statusOverall: 'passed' | 'not passed';
}
