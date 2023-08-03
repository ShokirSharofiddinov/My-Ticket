import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './model/event.model';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event)
    private eventRepo: typeof Event,
  ) {}

  async createEvent(
    createEventDto: CreateEventDto,
  ): Promise<Event> {
    const event = await this.eventRepo.create(
      createEventDto,
    );
    return event;
  }

  async getAllEvents(): Promise<Event[]> {
    const event = await this.eventRepo.findAll();
    return event;
  }

  async getEventById(id: number): Promise<Event> {
    const event = await this.eventRepo.findOne({
      where: { id },
    });
    return event;
  }

  async deleteEventById(id: number): Promise<number> {
    return this.eventRepo.destroy({ where: { id } });
  }

  async updateEvent(
    id: number,
    updateEventDto: UpdateEventDto,
  ): Promise<Event> {
    const event = await this.eventRepo.update(
      updateEventDto,
      {
        where: { id },
        returning: true,
      },
    );

    return event[1][0].dataValues;
  }
}
