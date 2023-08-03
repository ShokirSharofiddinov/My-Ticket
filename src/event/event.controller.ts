import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('Event')
export class EventController {
  constructor(private readonly EventService: EventService) {}

  @Post('createEvent')
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.EventService.createEvent(
      createEventDto,
    );
  }

  @Get()
  getAllEvents() {
    return this.EventService.getAllEvents();
  }

  @Get(':id')
  getEventById(@Param('id') id: string) {
    return this.EventService.getEventById(+id);
  }

  @Put(':id')
  updateEvent(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.EventService.updateEvent(
      +id,
      updateEventDto,
    );
  }

  @Delete(':id')
  deleteEventById(@Param('id') id: string) {
    return this.EventService.deleteEventById(+id);
  }
}
