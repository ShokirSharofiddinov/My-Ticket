import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Event_type } from '../../event_type/model/event_type.model';
import { Human_category } from '../../human_category/model/human_category.model';
import { Venue } from '../../venue/model/venue.model';

interface EventAttr {
  name: string;
  photo: string;
  start_date: Date;
  start_time: Date;
  finish_date: Date;
  finish_time: Date;
  info: string;
  event_type_id: number;
  human_category_id: number;
  venue_id: number
  lang_id: number
  release_date: Date
}

@Table({ tableName: 'event' })
export class Event extends Model<Event, EventAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'name',
    description: 'not null event name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @ApiProperty({
    example: 'photo',
    description: 'event photo',
  })
  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @ApiProperty({
    example: '8/3/2023',
    description: 'not null human Start_Date',
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_date: Date;

  @ApiProperty({
    example: '8/3/2023',
    description: 'not null start_time',
  })
  @Column({
    type: DataType.DATE,
  })
  start_time: Date;

  @ApiProperty({
    example: '8/3/2023',
    description: 'event finish_dat',
  })
  @Column({
    type: DataType.DATE,
  })
  finish_dat: Date;

  @ApiProperty({
    example: 'text',
    description: 'event finish_dat',
  })
  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @ApiProperty({
    example: 1,
    description: 'event event_type_id',
  })
  @ForeignKey(() => Event_type)
  @Column({
    type: DataType.INTEGER,
  })
  event_type_id: number;

  @ApiProperty({
    example: 1,
    description: 'event human_category_id',
  })
  @ForeignKey(() => Human_category)
  @Column({
    type: DataType.INTEGER,
  })
  human_category_id: number;

  @ApiProperty({
    example: 1,
    description: 'event venue_id',
  })
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;

  @ApiProperty({
    example: 1,
    description: 'event lang_id',
  })
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;

  @ApiProperty({
    example: '8/3/2023',
    description: 'event release_date',
  })
  @Column({
    type: DataType.DATE,
  })
  release_date: Date;
}
