import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Venue_type } from '../../venue_type/model/venue_type.model';

interface VenueAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venue_type_id: number;
  schema: string;
  region_id: number;
  district_id: number;
}

@Table({ tableName: 'venue' })
export class Venue extends Model<Venue, VenueAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'name',
    description: 'not null venue name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'adsress',
    description: 'not null venue address',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ApiProperty({
    example: 'location',
    description: 'venue location',
  })
  @Column({
    type: DataType.STRING,
  })
  location: string;

  @ApiProperty({
    example: 'site',
    description: 'venue site',
  })
  @Column({
    type: DataType.STRING,
  })
  site: string;

  @ApiProperty({
    example: 'venue_type_id',
  })
  @ForeignKey(() => Venue_type)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_type_id: number;

  @ApiProperty({
    example: 'schema',
    description: 'venue schema',
  })
  @Column({
    type: DataType.STRING,
  })
  schema: string;

  @ApiProperty({
    example: 'region_id',
  })
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;

  @ApiProperty({
    example: 'schema',
    description: 'venue schema',
  })
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;
}
