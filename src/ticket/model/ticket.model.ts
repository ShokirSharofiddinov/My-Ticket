import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Event } from '../../event/model/event.model';
import { Seat } from '../../seat/model/seat.model';

interface TicketAttr {
  event_id: number;
  seat_id: number;
  price: number;
  service_fee: number;
  status: number;
  ticket_type: number;
}

@Table({ tableName: 'ticket' })
export class Ticket extends Model<Ticket, TicketAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Ticket event id' })
  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
  })
  event_id: number;

  @ApiProperty({ example: 1, description: 'Ticket seat id' })
  @ForeignKey(() => Seat)
  @Column({
    type: DataType.INTEGER,
  })
  seat_id: number;

  @ApiProperty({ example: 15.5, description: 'Ticket price' })
  @Column({
    type: DataType.DECIMAL,
  })
  price: number;

  @ApiProperty({ example: 0.987, description: 'Ticket serivce fee' })
  @Column({
    type: DataType.DECIMAL,
  })
  service_fee: number;

  @ApiProperty({ example: 1, description: 'Ticket status' })
  @Column({
    type: DataType.INTEGER,
  })
  status: number;

  @ApiProperty({ example: 1, description: 'Ticket type' })
  @Column({
    type: DataType.INTEGER,
  })
  ticket_type: number;
}
