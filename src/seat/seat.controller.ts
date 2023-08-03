import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';

@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Post('createSeat')
  createSeat(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.createSeat(createSeatDto);
  }

  @Get()
  getAllSeats() {
    return this.seatService.getAllSeats();
  }

  @Get(':id')
  getSeatById(@Param('id') id: string) {
    return this.seatService.getSeatById(+id);
  }

  @Put(':id')
  updateSeat(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.updateSeat(+id, updateSeatDto);
  }

  @Delete(':id')
  deleteSeatById(@Param('id') id: string) {
    return this.seatService.deleteSeatById(+id);
  }
}
