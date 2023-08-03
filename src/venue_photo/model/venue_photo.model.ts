import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Venue } from '../../venue/model/venue.model';

interface Venue_photoAttr {
  venue_id: number
  url: string
}

@Table({ tableName: 'venue_photo' })
export class Venue_photo extends Model<Venue_photo, Venue_photoAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'venue id',
  })
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_id: number;

  @ApiProperty({
    example: 'http://example.com ',
  })
  @Column({
    type: DataType.STRING,
  })
  url: string;
}
