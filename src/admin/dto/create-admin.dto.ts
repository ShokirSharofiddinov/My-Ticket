export class CreateAdminDto {
  name: string;
  login: string;
  password: string;
  is_active: boolean;
  is_creator: boolean;
}
