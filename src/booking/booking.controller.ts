import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('Booking')
export class BookingController {
  constructor(private readonly BookingService: BookingService) {}

  @Post('createBooking')
  createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.BookingService.createBooking(createBookingDto);
  }

  @Get()
  getAllBookings() {
    return this.BookingService.getAllBookings();
  }

  @Get(':id')
  getBookingById(@Param('id') id: string) {
    return this.BookingService.getBookingById(+id);
  }

  @Put(':id')
  updateBooking(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    return this.BookingService.updateBooking(+id, updateBookingDto);
  }

  @Delete(':id')
  deleteBookingById(@Param('id') id: string) {
    return this.BookingService.deleteBookingById(+id);
  }
}
