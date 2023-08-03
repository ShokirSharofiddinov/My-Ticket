import { Module } from '@nestjs/common';
import { Customer_addressController } from './customer_address.controller';
import { customerAddressService } from './customer_address.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer_address } from './model/customer_address.model';

@Module({
  imports: [SequelizeModule.forFeature([Customer_address])],
  controllers: [Customer_addressController],
  providers: [customerAddressService],
})
export class CustomerAddressModule {}
