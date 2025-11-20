import { ApiProperty } from '@nestjs/swagger';

export class UploadUserImageDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Image user yang akan di-upload',
  })
  file: any;
}
