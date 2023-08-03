import { Module } from '@nestjs/common';
import { Customer_cardService } from './customer_card.service';
import { Customer_cardController } from './customer_card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer_card } from './model/customer_card.model';

@Module({
  imports: [SequelizeModule.forFeature([Customer_card])],
  controllers: [Customer_cardController],
  providers: [Customer_cardService],
})
export class CustomerCatdModule {}
