import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface Human_categoryAttr {
  name: string
  start_age: number
  finish_age: number
  gender: string
}

@Table({ tableName: 'human_category' })
export class Human_category extends Model<Human_category, Human_categoryAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'name1',
    description: 'not null human_category name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: '7',
    description: 'human start_age',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  start_age: number;

  @ApiProperty({
    example: '70',
    description: 'human finish age',
  })
  @Column({
    type: DataType.INTEGER,
  })
  finish_age: number;

  @ApiProperty({
    example: 'male',
    description: 'human_category gender',
  })
  @Column({
    type: DataType.STRING,
  })
  gender: string;
}
