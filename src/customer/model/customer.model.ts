import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

interface CustomerAttr {
  first_name: string
  last_name: string
  phone: string 
  hashed_password: string
  email: string
  birth_day: Date
  gender: string
  lang_id: number
  hashed_refresh_token: string
}

@Table({ tableName: 'customer' })
export class Customer extends Model<Customer, CustomerAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'first_name',
    description: 'customer first_name',
  })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({
    example: 'last_name',
    description: 'not null customer last_name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  start_date: string;

  @ApiProperty({
    example: '+99123456789',
    description: 'not null phone',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: '678odfsugreuasdf',
    description: 'customer hashed_password',
  })
  @Column({
    type: DataType.STRING,
  })
  finish_dat: string;

  @ApiProperty({
    example: 'email@mail.com',
    description: 'customer email',
  })
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @ApiProperty({
    example: '8/3/2023',
    description: 'customer birth_day',
  })
  @Column({
    type: DataType.DATE,
  })
  birth_day: Date;

  @ApiProperty({
    example: 'male',
    description: 'customer gender',
  })
  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @ApiProperty({
    example: 1,
    description: 'customer lang_id',
  })
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;

  @ApiProperty({
    example: 'eajsdghfidf678hfidfsdfjhgysdf8guhdf8gyu',
    description: 'customer hashed_refresh_token',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
