import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class AssignMenusDto {
  @ApiProperty({
    type: [String],
    description: 'Daftar ID menu yang akan ditambahkan ke role',
    example: ['dashboard', 'qc_template', 'product', 'qc_list', 'user'],
  })
  @IsArray()
  @IsString({ each: true })
  menuIds: string[];
}
