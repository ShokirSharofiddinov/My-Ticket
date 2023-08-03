import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';

@Controller('venue-type')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @Post('createVenueType')
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.createVenueType(createVenueTypeDto);
  }

  @Get()
  getAllVenueTypes() {
    return this.venueTypeService.getAllVenueTypes();
  }

  @Get(':id')
  getVenueTypeById(@Param('id') id: string) {
    return this.venueTypeService.getVenueTypeById(+id);
  }

  @Patch(':id')
  updateVenueType(
    @Param('id') id: string,
    @Body() updateVenueTypeDto: UpdateVenueTypeDto,
  ) {
    return this.venueTypeService.updateVenueType(+id, updateVenueTypeDto);
  }

  @Delete(':id')
  deleteVenueTypeById(@Param('id') id: string) {
    return this.venueTypeService.deleteVenueTypeById(+id);
  }
}
