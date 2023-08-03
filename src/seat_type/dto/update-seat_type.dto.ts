import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSeatTypeDto } from './create-seat_type.dto';

export class UpdateSeatTypeDto extends PartialType(CreateSeatTypeDto) {
  @ApiProperty({
    example: 'name2',
    description: 'name update uchun',
  })
  name?: string;
}
