import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';

@Controller('humanCategory')
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @Post('createHumanCategory')
  createHumanCategory(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryService.createHumanCategory(createHumanCategoryDto);
  }

  @Get()
  getAllHumanCategorys() {
    return this.humanCategoryService.getAllHumanCategorys();
  }

  @Get(':id')
  getHumanCategoryById(@Param('id') id: string) {
    return this.humanCategoryService.getHumanCategoryById(+id);
  }

  @Put(':id')
  updateHumanCategory(@Param('id') id: string, @Body() updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategoryService.updateHumanCategory(+id, updateHumanCategoryDto);
  }

  @Delete(':id')
  deleteHumanCategoryById(@Param('id') id: string) {
    return this.humanCategoryService.deleteHumanCategoryById(+id);
  }
}
