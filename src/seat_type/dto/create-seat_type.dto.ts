import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatTypeDto {
  @ApiProperty({
    example: 'name1',
    description: 'name uchun',
  })
  name: string;
}
