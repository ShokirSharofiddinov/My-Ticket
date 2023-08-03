import { Injectable } from '@nestjs/common';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Human_category } from './model/human_category.model';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';

@Injectable()
export class HumanCategoryService {
  constructor(@InjectModel(Human_category) private human_categoryRepo: typeof Human_category) {}

  async createHumanCategory(createHumanCategoryDto: CreateHumanCategoryDto): Promise<Human_category> {
    const human_category = await this.human_categoryRepo.create(createHumanCategoryDto);
    return human_category;
  }

  async getAllHumanCategorys(): Promise<Human_category[]> {
    const human_category = await this.human_categoryRepo.findAll();
    return human_category;
  }

  async getHumanCategoryById(id: number): Promise<Human_category> {
    const human_category = await this.human_categoryRepo.findOne({ where: { id } });
    return human_category;
  }

  async deleteHumanCategoryById(id: number): Promise<number> {
    return this.human_categoryRepo.destroy({ where: { id } });
  }

  async updateHumanCategory(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<Human_category> {
    const human_category = await this.human_categoryRepo.update(updateHumanCategoryDto, {
      where: { id },
      returning: true,
    });

    return human_category[1][0].dataValues;
  }
}
