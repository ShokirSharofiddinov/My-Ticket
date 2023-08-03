import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('Admin')
export class AdminController {
  constructor(private readonly AdminService: AdminService) {}

  @Post('createAdmin')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.AdminService.createAdmin(createAdminDto);
  }

  @Get()
  getAllAdmins() {
    return this.AdminService.getAllAdmin();
  }

  @Get(':id')
  getAdminById(@Param('id') id: string) {
    return this.AdminService.getAdminById(+id);
  }

  @Put(':id')
  updateAdmin(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return this.AdminService.updateAdmin(+id, updateAdminDto);
  }

  @Delete(':id')
  deleteAdminById(@Param('id') id: string) {
    return this.AdminService.deleteAdminById(+id);
  }
}
