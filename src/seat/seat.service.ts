import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './model/seat.model';
import { UpdateSeatDto } from './dto/update-seat.dto';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepo: typeof Seat) {}

  async createSeat(createSeatDto: CreateSeatDto): Promise<Seat> {
    const seat = await this.seatRepo.create(createSeatDto);
    return seat;
  }

  async getAllSeats(): Promise<Seat[]> {
    const seat = await this.seatRepo.findAll();
    return seat;
  }

  async getSeatById(id: number): Promise<Seat> {
    const seat = await this.seatRepo.findOne({ where: { id } });
    return seat;
  }

  async deleteSeatById(id: number): Promise<number> {
    return this.seatRepo.destroy({ where: { id } });
  }

  async updateSeat(
    id: number,
    updateSeatDto: UpdateSeatDto,
  ): Promise<Seat> {
    const seat = await this.seatRepo.update(updateSeatDto, {
      where: { id },
      returning: true,
    });

    return seat[1][0].dataValues;
  }
}
