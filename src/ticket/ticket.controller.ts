import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post('createTicket')
  createTicket(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.createTicket(createTicketDto);
  }

  @Get()
  getAllTickets() {
    return this.ticketService.getAllTickets();
  }

  @Get(':id')
  getTicketById(@Param('id') id: string) {
    return this.ticketService.getTicketById(+id);
  }

  @Put(':id')
  updateTicket(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.updateTicket(+id, updateTicketDto);
  }

  @Delete(':id')
  deleteTicketById(@Param('id') id: string) {
    return this.ticketService.deleteTicketById(+id);
  }
}
