import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Seat_type } from './model/seat_type.model';

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(Seat_type) private seatTypeRepo: typeof Seat_type,
  ) {}

  async createSeatType(createSeatTypeDto: CreateSeatTypeDto) {
    const newSeatType = await this.seatTypeRepo.create(createSeatTypeDto);
    return newSeatType;
  }

  async getAllSeatTypes() {
    const seats = await this.seatTypeRepo.findAll();
    return seats;
  }

  async getSeatTypeById(id: number) {
    const seat = await this.seatTypeRepo.findByPk(id);
    return seat;
  }

  async updateSeatType(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const seat = await this.seatTypeRepo.update(UpdateSeatTypeDto, {
      where: { id },
      returning: true,
    });

    return seat[1][0].dataValues;
  }

  async deleteSeatTypeById(id: number): Promise<number> {
    return this.seatTypeRepo.destroy({ where: { id } });
  }
}
