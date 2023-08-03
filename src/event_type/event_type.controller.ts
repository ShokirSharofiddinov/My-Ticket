import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';

@Controller('eventType')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @Post('createEventType')
  createEventType(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.createEventType(
      createEventTypeDto,
    );
  }

  @Get()
  getAllEventTypes() {
    return this.eventTypeService.getAllEventTypes();
  }

  @Get(':id')
  getEventTypeById(@Param('id') id: string) {
    return this.eventTypeService.getEventTypeById(+id);
  }

  @Put(':id')
  updateEventType(
    @Param('id') id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto,
  ) {
    return this.eventTypeService.updateEventType(
      +id,
      updateEventTypeDto,
    );
  }

  @Delete(':id')
  deleteEventTypeById(@Param('id') id: string) {
    return this.eventTypeService.deleteEventTypeById(+id);
  }
}
