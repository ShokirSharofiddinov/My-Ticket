import { PartialType } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  cart_id?: number;
  createdAt?: Date;
  fineshedAt?: Date;
  payment_id?: number;
  delivery_id?: number;
  discount_coupon_id?: number;
  status_id?: number;
}
