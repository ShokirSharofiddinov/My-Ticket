import { PartialType } from '@nestjs/swagger';
import { CreateCartDto } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDto) {
  ticket_id?: number;
  customer_id?: number;
  createdAt?: Date;
  fineshedAt?: Date;
  status_id?: number;
}
