import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface Event_typeAttr {
  name: string;
  parent_event_type_id: number;
}

@Table({ tableName: 'event_type' })
export class Event_type extends Model<Event_type, Event_typeAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'name1',
    description: 'not null event_type name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 1,
    description: 'sport id',
  })
  @ForeignKey(() => Event_type)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  parent_event_type_id: number;
}
