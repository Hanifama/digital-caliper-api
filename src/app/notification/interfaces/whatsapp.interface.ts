export interface IWhatsAppService {
  isReady(): boolean;
  sendPdfToGroups(
    pdfBuffer: Buffer,
    fileName: string,
    caption: string,
    groupJids: string[], // DI BAILEYS PAKAI JID
  ): Promise<{ sent: string[]; failed: string[] }>;
  sendImageToGroups(
    imageUrl: string,
    caption: string,
    groupJids: string[],
  ): Promise<{ sent: string[]; failed: string[] }>;
  sendTextToGroups(
    message: string,
    groupJids: string[],
  ): Promise<{ sent: string[]; failed: string[] }>;
  getGroupJidByName(groupName: string): Promise<string | null>;
  getGroupJidsByNames(groupNames: string[]): Promise<string[]>;
}
