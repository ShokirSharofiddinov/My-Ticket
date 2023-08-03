import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer_address } from './model/customer_address.model';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';

@Injectable()
export class customerAddressService {
  constructor(
    @InjectModel(Customer_address)
    private customer_addressRepo: typeof Customer_address,
  ) {}

  async createcustomerAddress(
    createCustomerAddressDto: CreateCustomerAddressDto,
  ): Promise<Customer_address> {
    const customer_address = await this.customer_addressRepo.create(
      createCustomerAddressDto,
    );
    return customer_address;
  }

  async getAllcustomerAddresss(): Promise<Customer_address[]> {
    const customer_address = await this.customer_addressRepo.findAll();
    return customer_address;
  }

  async getcustomerAddressById(id: number): Promise<Customer_address> {
    const customer_address = await this.customer_addressRepo.findOne({
      where: { id },
    });
    return customer_address;
  }

  async deletecustomerAddressById(id: number): Promise<number> {
    return this.customer_addressRepo.destroy({ where: { id } });
  }

  async updatecustomerAddress(
    id: number,
    updateCustomerAddressDto: UpdateCustomerAddressDto,
  ): Promise<Customer_address> {
    const customer_address = await this.customer_addressRepo.update(
      updateCustomerAddressDto,
      {
        where: { id },
        returning: true,
      },
    );

    return customer_address[1][0].dataValues;
  }
}
