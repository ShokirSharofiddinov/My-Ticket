import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Customer } from '../../customer/model/customer.model';

interface Customer_addressAttr {
  customer_id: number;
  name: string;
  country_id: number;
  region_id: number;
  district_id: number;
  street: string;
  house: string;
  flat: number;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: 'customer_address' })
export class Customer_address extends Model<
  Customer_address,
  Customer_addressAttr
> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @ApiProperty({
    example: 1,
    description: 'customer_address customer id',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @ApiProperty({
    example: 'name',
    description: 'not null name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 1,
    description: 'not null country_id',
  })
  @Column({
    type: DataType.INTEGER,
  })
  phone: number;

  @ApiProperty({
    example: 1,
    description: 'customer_address region_id',
  })
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;

  @ApiProperty({
    example: 1,
    description: 'customer_address district_id',
  })
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;

  @ApiProperty({
    example: 'street',
    description: 'customer_address street',
  })
  @Column({
    type: DataType.STRING,
  })
  street: string;

  @ApiProperty({
    example: 'house',
    description: 'customer_address house',
  })
  @Column({
    type: DataType.STRING,
  })
  house: string;

  @ApiProperty({
    example: 1,
    description: 'customer_address flat',
  })
  @Column({
    type: DataType.INTEGER,
  })
  flat: number;

  @ApiProperty({
    example: 'location',
    description: 'customer_address location',
  })
  @Column({
    type: DataType.STRING,
  })
  location: string;

  @ApiProperty({
    example: 'post_index',
    description: 'customer_address post_index',
  })
  @Column({
    type: DataType.STRING,
  })
  post_index: string;

  @ApiProperty({
    example: 'info',
    description: 'customer_address info',
  })
  @Column({
    type: DataType.TEXT,
  })
  info: string;
}
