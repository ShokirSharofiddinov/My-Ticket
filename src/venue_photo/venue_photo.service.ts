import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Venue_photo } from './model/venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(Venue_photo) private venueTypeRepo: typeof Venue_photo,
  ) {}

  async createVenuePhoto(createVenuePhotoDto: CreateVenuePhotoDto) {
    const newVenuePhoto = await this.venueTypeRepo.create(createVenuePhotoDto);
    return newVenuePhoto;
  }

  async getAllVenuePhotos() {
    const venues = await this.venueTypeRepo.findAll();
    return venues;
  }

  async getVenuePhotoById(id: number) {
    const venue = await this.venueTypeRepo.findByPk(id);
    return venue;
  }

  async updateVenuePhoto(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    const venue = await this.venueTypeRepo.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });

    return venue[1][0].dataValues;
  }

  async deleteVenuePhotoById(id: number): Promise<number> {
    return this.venueTypeRepo.destroy({ where: { id } });
  }
}
