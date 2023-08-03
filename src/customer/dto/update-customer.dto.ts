import { PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  first_name?: string;
  last_name?: string;
  phone?: string;
  hashed_password?: string;
  email?: string;
  birth_day?: Date;
  gender?: string;
  lang_id?: number;
  hashed_refresh_token?: string;
}
