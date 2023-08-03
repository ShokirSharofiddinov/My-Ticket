import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { customerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';

@Controller('Customer_address')
export class Customer_addressController {
  constructor(
    private readonly Customer_addressService: customerAddressService,
  ) {}

  @Post('createCustomer_address')
  createCustomer_address(
    @Body() createCustomerAddressDto: CreateCustomerAddressDto,
  ) {
    return this.Customer_addressService.createcustomerAddress(
      createCustomerAddressDto,
    );
  }

  @Get()
  getAllCustomer_addresss() {
    return this.Customer_addressService.getAllcustomerAddresss();
  }

  @Get(':id')
  getCustomer_addressById(@Param('id') id: string) {
    return this.Customer_addressService.getcustomerAddressById(+id);
  }

  @Put(':id')
  updateCustomer_address(
    @Param('id') id: string,
    @Body() updateCustomerAddressDto: UpdateCustomerAddressDto,
  ) {
    return this.Customer_addressService.updatecustomerAddress(
      +id,
      updateCustomerAddressDto,
    );
  }

  @Delete(':id')
  deleteCustomer_addressById(@Param('id') id: string) {
    return this.Customer_addressService.deletecustomerAddressById(+id);
  }
}
