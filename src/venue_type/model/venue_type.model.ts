import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Venue } from '../../venue/model/venue.model';

interface Venue_typeAttr {
  name: string;
}

@Table({ tableName: 'venue_type' })
export class Venue_type extends Model<Venue_type, Venue_typeAttr> {
  @ForeignKey(() => Venue)
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'name',
    description: 'not null venue_typr name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
