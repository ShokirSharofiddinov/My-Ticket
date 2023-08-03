import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueTypeDto {
  @ApiProperty({
    example: 'name1',
    description: 'name uchun',
  })
  name: string;
}
