import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateHumanCategoryDto } from './create-human_category.dto';

export class UpdateHumanCategoryDto extends PartialType(CreateHumanCategoryDto) {
  @ApiProperty({
    example: 'name1',
    description: 'name update uchun',
  })
  name?: string;

  @ApiProperty({
    example: 8,
    description: 'start_age update uchun',
  })
  start_age?: number;

  @ApiProperty({
    example: 80,
    description: 'finish_age update uchun',
  })
  finish_age?: number;

  @ApiProperty({
    example: 'female',
    description: 'start_age update uchun',
  })
  gender?: string;
}
