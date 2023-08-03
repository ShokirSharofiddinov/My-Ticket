import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVenuePhotoDto } from './create-venue_photo.dto';

export class UpdateVenuePhotoDto extends PartialType(CreateVenuePhotoDto) {
  @ApiProperty({
    example: 2,
    description: 'venue_id update uchun',
  })
  venue_id?: number;

  @ApiProperty({
    example: 'url2',
    description: 'url update uchun',
  })
  url?: string;
}
