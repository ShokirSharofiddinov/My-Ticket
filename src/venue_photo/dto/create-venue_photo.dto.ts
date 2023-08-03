import { ApiProperty } from "@nestjs/swagger";

export class CreateVenuePhotoDto {
  @ApiProperty({
    example: 1,
    description: 'venue_id uchun',
  })
  venue_id: number;

  @ApiProperty({
    example: 'url1',
    description: 'url uchun',
  })
  url: string;
}
