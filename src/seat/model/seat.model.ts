import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Seat_type } from '../../seat_type/model/seat_type.model';

interface SeatAttr {
  sector: number;
  row_number: number;
  number: number;
  seat_id: number;
  seat_type_id: number;
  location_in_schema: string;
}

@Table({ tableName: 'seat' })
export class Seat extends Model<Seat, SeatAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'sector',
    description: 'not null seat sector',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sector: number;

  @ApiProperty({
    example: 'row_ number',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  row_number: number;

  @ApiProperty({
    example: 'number',
  })
  @Column({
    type: DataType.INTEGER,
  })
  location: number;

  @ApiProperty({
    example: 'seat_id',
  })
  @Column({
    type: DataType.INTEGER,
  })
  seat_id: number;

  @ApiProperty({
    example: 'seat_type_id',
  })
  @ForeignKey(() => Seat_type)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seat_type_id: number;

  @ApiProperty({
    example: 'location_in_schema',
  })
  @Column({
    type: DataType.STRING,
  })
  location_in_schema: string;
}
