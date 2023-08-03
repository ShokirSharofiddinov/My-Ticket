import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';

@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @Post('createVenuePhoto')
  create(@Body() createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoService.createVenuePhoto(createVenuePhotoDto);
  }

  @Get()
  getAllVenuePhotos() {
    return this.venuePhotoService.getAllVenuePhotos();
  }

  @Get(':id')
  getVenuePhotoById(@Param('id') id: string) {
    return this.venuePhotoService.getVenuePhotoById(+id);
  }

  @Patch(':id')
  updateVenuePhoto(
    @Param('id') id: string,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto,
  ) {
    return this.venuePhotoService.updateVenuePhoto(+id, updateVenuePhotoDto);
  }

  @Delete(':id')
  deleteVenuePhotoById(@Param('id') id: string) {
    return this.venuePhotoService.deleteVenuePhotoById(+id);
  }
}
