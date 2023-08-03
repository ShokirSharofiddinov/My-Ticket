import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVenueTypeDto } from './create-venue_type.dto';

export class UpdateVenueTypeDto extends PartialType(CreateVenueTypeDto) {
  @ApiProperty({
    example: 'name2',
    description: 'name update uchun',
  })
  name?: string;
}
