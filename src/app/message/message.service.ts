import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  private message: string;

  public setMessage(message: string): void {
    this.message = message;
  }

  public getMessage(): string {
    return this.message;
  }
}
