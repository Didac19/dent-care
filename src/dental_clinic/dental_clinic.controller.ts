import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DentalClinicService } from './dental_clinic.service';
import { CreateDentalClinicDto } from './dto/create-dental_clinic.dto';
import { UpdateDentalClinicDto } from './dto/update-dental_clinic.dto';

@Controller('dental-clinic')
export class DentalClinicController {
  constructor(private readonly dentalClinicService: DentalClinicService) {}

  @Post()
  create(@Body() createDentalClinicDto: CreateDentalClinicDto) {
    return this.dentalClinicService.create(createDentalClinicDto);
  }

  @Get()
  findAll() {
    return this.dentalClinicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dentalClinicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDentalClinicDto: UpdateDentalClinicDto) {
    return this.dentalClinicService.update(+id, updateDentalClinicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dentalClinicService.remove(+id);
  }
}
