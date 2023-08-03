import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Venue } from './model/venue.model';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepo: typeof Venue) {}

  async createVenue(createVenueDto: CreateVenueDto): Promise<Venue> {
    const venue = await this.venueRepo.create(createVenueDto);
    return venue;
  }

  async getAllVenues(): Promise<Venue[]> {
    const venue = await this.venueRepo.findAll();
    return venue;
  }

  async getVenueById(id: number): Promise<Venue> {
    const venue = await this.venueRepo.findOne({ where: { id } });
    return venue;
  }

  async deleteVenueById(id: number): Promise<number> {
    return this.venueRepo.destroy({ where: { id } });
  }

  async updateVenue(
    id: number,
    updateVenueDto: UpdateVenueDto,
  ): Promise<Venue> {
    const venue = await this.venueRepo.update(updateVenueDto, {
      where: { id },
      returning: true,
    });

    return venue[1][0].dataValues;
  }
}
