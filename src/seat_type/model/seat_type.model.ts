import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface Seat_typeAttr {
  name: string;
}

@Table({ tableName: 'seat_type' })
export class Seat_type extends Model<Seat_type, Seat_typeAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'name',
    description: 'not null Seat_type name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
