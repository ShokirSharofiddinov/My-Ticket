import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('Customer')
export class CustomerController {
  constructor(private readonly CustomerService: CustomerService) {}

  @Post('createCustomer')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.CustomerService.createCustomer(createCustomerDto);
  }

  @Get()
  getAllCustomers() {
    return this.CustomerService.getAllCustomers();
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return this.CustomerService.getCustomerById(+id);
  }

  @Put(':id')
  updateCustomer(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.CustomerService.updateCustomer(+id, updateCustomerDto);
  }

  @Delete(':id')
  deleteCustomerById(@Param('id') id: string) {
    return this.CustomerService.deleteCustomerById(+id);
  }
}
