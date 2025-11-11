import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsOptional()
  location_id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  longitude: string;

  @IsString()
  @IsNotEmpty()
  latitude: string;

  @IsString()
  @IsOptional()
  addres?: string;
}
