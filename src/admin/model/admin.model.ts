import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface AdminAttr {
  name: string;
  login: string;
  password: string;
  is_active: boolean;
  is_creator: boolean;
}

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, AdminAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John', description: 'Admin name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'login', description: 'login' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  login: string;

  @ApiProperty({ example: 'pa$$w0rd', description: 'Admin password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 'true', description: 'Admin is active?' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({ example: 'false', description: 'Admin is creator?' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_creator: boolean;
}
