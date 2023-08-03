import { Module } from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { SeatTypeController } from './seat_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seat_type } from './model/seat_type.model';

@Module({
  imports: [SequelizeModule.forFeature([Seat_type])],
  controllers: [SeatTypeController],
  providers: [SeatTypeService],
})
export class SeatTypeModule {}
