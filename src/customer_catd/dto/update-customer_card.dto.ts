import { PartialType } from '@nestjs/swagger';
import { CreateCustomerCatdDto } from './create-customer_card.dto';

export class UpdateCustomerCatdDto extends PartialType(CreateCustomerCatdDto) {
  customer_id?: number;
  name?: string;
  phone?: string;
  number?: string;
  year?: string;
  month?: string;
  is_active?: boolean;
  is_main?: boolean;
}
