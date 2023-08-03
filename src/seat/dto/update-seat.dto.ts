import { PartialType } from '@nestjs/swagger';
import { CreateSeatDto } from './create-seat.dto';

export class UpdateSeatDto extends PartialType(CreateSeatDto) {
  sector: number;
  row_number: number;
  number: number;
  seat_id: number;
  seat_type_id: number;
  location_in_schema: string;
}
