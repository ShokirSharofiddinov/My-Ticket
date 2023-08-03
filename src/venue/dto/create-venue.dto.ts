import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueDto {
  @ApiProperty({
    example: 'name1',
    description: 'name uchun',
  })
  name: string;

  @ApiProperty({
    example: 'address1',
    description: 'adderss uchun',
  })
  address: string;

  @ApiProperty({
    example: 'location1',
    description: 'location uchun',
  })
  location: string;

  @ApiProperty({
    example: 'site1',
    description: 'site uchun',
  })
  site: string;

  @ApiProperty({
    example: '90 999 99 99',
    description: 'phone number uchun',
  })
  phone: string;

  @ApiProperty({
    example: 1,
    description: 'venue_type_id uchun',
  })
  venue_type_id: number;

  @ApiProperty({
    example: 'schema',
    description: 'schema uchun',
  })
  schema: string;

  @ApiProperty({
    example: 1,
    description: 'region_id uchun',
  })
  region_id: number;

  @ApiProperty({
    example: 1,
    description: 'district_id uchun',
  })
  district_id: number;
}
