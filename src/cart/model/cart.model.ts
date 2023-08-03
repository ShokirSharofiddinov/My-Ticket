import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Ticket } from '../../ticket/model/ticket.model';
import { Customer } from '../../customer/model/customer.model';

interface CartAttr {
  ticket_id: number;
  customer_id: number;
  createdAt: Date;
  fineshedAt: Date;
  status_id: number;
}

@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, CartAttr> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Ticket)
  @ApiProperty({ example: 1, description: 'Ticket id' })
  @Column({
    type: DataType.INTEGER,
  })
  ticket_id: number;

  @ForeignKey(() => Customer)
  @ApiProperty({ example: 1, description: 'Customer id' })
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @ApiProperty({ example: 1, description: 'Creating date' })
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @ApiProperty({ example: 1, description: 'Finishing date' })
  @Column({
    type: DataType.DATE,
  })
  fineshedAt: Date;

  @ApiProperty({ example: 1, description: 'Ticket id' })
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;

}
