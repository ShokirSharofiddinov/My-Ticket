import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatDto {
  @ApiProperty({
    example: 'sector2',
    description: 'sector uchun',
  })
  sector: number;

  @ApiProperty({
    example: 1,
    description: 'row_number uchun',
  })
  row_number: number;

  @ApiProperty({
    example: 1,
    description: 'number uchun',
  })
  number: number;

  @ApiProperty({
    example: 1,
    description: 'seat_id uchun',
  })
  seat_id: number;

  @ApiProperty({
    example: 1,
    description: 'seat_type_id uchun',
  })
  seat_type_id: number;

  @ApiProperty({
    example: 'location1',
    description: 'location_in_schema uchun',
  })
  location_in_schema: string;
}
