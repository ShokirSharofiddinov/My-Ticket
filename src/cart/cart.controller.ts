import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('Cart')
export class CartController {
  constructor(private readonly CartService: CartService) {}

  @Post('createCart')
  createCart(@Body() createCartDto: CreateCartDto) {
    return this.CartService.createCart(createCartDto);
  }

  @Get()
  getAllCarts() {
    return this.CartService.getAllCarts();
  }

  @Get(':id')
  getCartById(@Param('id') id: string) {
    return this.CartService.getCartById(+id);
  }

  @Put(':id')
  updateCart(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.CartService.updateCart(+id, updateCartDto);
  }

  @Delete(':id')
  deleteCartById(@Param('id') id: string) {
    return this.CartService.deleteCartById(+id);
  }
}
