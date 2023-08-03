import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post('createVenue')
  createVenue(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.createVenue(createVenueDto);
  }

  @Get()
  getAllVenues() {
    return this.venueService.getAllVenues();
  }

  @Get(':id')
  getVenueById(@Param('id') id: string) {
    return this.venueService.getVenueById(+id);
  }

  @Put(':id')
  updateVenue(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.updateVenue(+id, updateVenueDto);
  }

  @Delete(':id')
  deleteVenueById(@Param('id') id: string) {
    return this.venueService.deleteVenueById(+id);
  }
}
