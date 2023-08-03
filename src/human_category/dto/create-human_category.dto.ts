import { ApiProperty } from "@nestjs/swagger";

export class CreateHumanCategoryDto {
  @ApiProperty({
    example: 'name2',
    description: 'name uchun',
  })
  name: string;

  @ApiProperty({
    example: 7,
    description: 'start_age uchun',
  })
  start_age: number;

  @ApiProperty({
    example: 60,
    description: 'finish_age uchun',
  })
  finish_age: number;

  @ApiProperty({
    example: 'male',
    description: 'gender uchun',
  })
  gender: string;
}
