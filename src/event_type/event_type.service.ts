import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event_type } from './model/event_type.model';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(Event_type)
    private event_typeRepo: typeof Event_type,
  ) {}

  async createEventType(
    createEventTypeDto: CreateEventTypeDto,
  ): Promise<Event_type> {
    const event_type = await this.event_typeRepo.create(
      createEventTypeDto,
    );
    return event_type;
  }

  async getAllEventTypes(): Promise<Event_type[]> {
    const event_type = await this.event_typeRepo.findAll();
    return event_type;
  }

  async getEventTypeById(id: number): Promise<Event_type> {
    const event_type = await this.event_typeRepo.findOne({
      where: { id },
    });
    return event_type;
  }

  async deleteEventTypeById(id: number): Promise<number> {
    return this.event_typeRepo.destroy({ where: { id } });
  }

  async updateEventType(
    id: number,
    updateEventTypeDto: UpdateEventTypeDto,
  ): Promise<Event_type> {
    const event_type = await this.event_typeRepo.update(
      updateEventTypeDto,
      {
        where: { id },
        returning: true,
      },
    );

    return event_type[1][0].dataValues;
  }
}
