import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';

@Controller('seat-type')
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @Post('createSeatType')
  create(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.createSeatType(createSeatTypeDto);
  }

  @Get()
  getAllSeatTypes() {
    return this.seatTypeService.getAllSeatTypes();
  }

  @Get(':id')
  getSeatTypeById(@Param('id') id: string) {
    return this.seatTypeService.getSeatTypeById(+id);
  }

  @Patch(':id')
  updateSeatType(
    @Param('id') id: string,
    @Body() updateSeatTypeDto: UpdateSeatTypeDto,
  ) {
    return this.seatTypeService.updateSeatType(+id, updateSeatTypeDto);
  }

  @Delete(':id')
  deleteSeatTypeById(@Param('id') id: string) {
    return this.seatTypeService.deleteSeatTypeById(+id);
  }
}
