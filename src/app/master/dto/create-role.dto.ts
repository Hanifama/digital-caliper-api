import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    description: 'Nama role yang akan dibuat',
    example: 'Admin',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Daftar menu yang terkait dengan role',
    example: ['dashboard', 'qc_template', 'product', 'qc_list', 'user'],
    required: false,
    isArray: true,
    type: String,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  menuIds?: string[];
}
