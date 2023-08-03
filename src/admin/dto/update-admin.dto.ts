import { PartialType } from '@nestjs/swagger';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  name?: string;
  login?: string;
  password?: string;
  is_active?: boolean;
  is_creator?: boolean;
}
