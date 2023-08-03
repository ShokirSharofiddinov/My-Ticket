import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Venue_type } from './model/venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(Venue_type) private venueTypeRepo: typeof Venue_type,
  ) {}

  async createVenueType(createVenueTypeDto: CreateVenueTypeDto) {
    const newVenueType = await this.venueTypeRepo.create(createVenueTypeDto);
    return newVenueType;
  }

  async getAllVenueTypes() {
    const venues = await this.venueTypeRepo.findAll();
    return venues;
  }

  async getVenueTypeById(id: number) {
    const venue = await this.venueTypeRepo.findByPk(id);
    return venue;
  }

  async updateVenueType(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const venue = await this.venueTypeRepo.update(UpdateVenueTypeDto, {
      where: { id },
      returning: true,
    });

    return venue[1][0].dataValues;
  }

  async deleteVenueTypeById(id: number): Promise<number> {
    return this.venueTypeRepo.destroy({ where: { id } });
  }
}
