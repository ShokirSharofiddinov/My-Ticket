import { Injectable } from '@nestjs/common';
import { CreateCustomerCatdDto } from './dto/create-customer_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer_card } from './model/customer_card.model';
import { UpdateCustomerCatdDto } from './dto/update-customer_card.dto';

@Injectable()
export class Customer_cardService {
  constructor(
    @InjectModel(Customer_card)
    private customer_cardRepo: typeof Customer_card,
  ) {}

  async createCustomer_card(
    createCustomerCatdDto: CreateCustomerCatdDto,
  ): Promise<Customer_card> {
    const customer_card = await this.customer_cardRepo.create(
      createCustomerCatdDto,
    );
    return customer_card;
  }

  async getAllCustomer_cards(): Promise<Customer_card[]> {
    const customer_card = await this.customer_cardRepo.findAll();
    return customer_card;
  }

  async getCustomer_cardById(id: number): Promise<Customer_card> {
    const customer_card = await this.customer_cardRepo.findOne({
      where: { id },
    });
    return customer_card;
  }

  async deleteCustomer_cardById(id: number): Promise<number> {
    return this.customer_cardRepo.destroy({ where: { id } });
  }

  async updateCustomer_card(
    id: number,
    updateCustomerCatdDto: UpdateCustomerCatdDto,
  ): Promise<Customer_card> {
    const customer_card = await this.customer_cardRepo.update(
      updateCustomerCatdDto,
      {
        where: { id },
        returning: true,
      },
    );

    return customer_card[1][0].dataValues;
  }
}
