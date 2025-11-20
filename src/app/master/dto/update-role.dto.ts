import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateRoleDto {
  @ApiProperty({ description: 'Nama role', example: 'Admin' })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    type: [String],
    description: 'Daftar ID menu yang terkait dengan role',
    example: ['dashboard', 'qc_template', 'product', 'qc_list', 'user'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  menuIds?: string[];
}
