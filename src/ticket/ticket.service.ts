import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from './model/ticket.model';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketRepo: typeof Ticket) {}

  async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = await this.ticketRepo.create(createTicketDto);
    return ticket;
  }

  async getAllTickets(): Promise<Ticket[]> {
    const ticket = await this.ticketRepo.findAll();
    return ticket;
  }

  async getTicketById(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepo.findOne({ where: { id } });
    return ticket;
  }

  async deleteTicketById(id: number): Promise<number> {
    return this.ticketRepo.destroy({ where: { id } });
  }

  async updateTicket(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    const ticket = await this.ticketRepo.update(updateTicketDto, {
      where: { id },
      returning: true,
    });

    return ticket[1][0].dataValues;
  }
}
