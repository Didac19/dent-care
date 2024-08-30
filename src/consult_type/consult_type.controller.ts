import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultTypeService } from './consult_type.service';
import { CreateConsultTypeDto } from './dto/create-consult_type.dto';
import { UpdateConsultTypeDto } from './dto/update-consult_type.dto';

@Controller('consult-type')
export class ConsultTypeController {
  constructor(private readonly consultTypeService: ConsultTypeService) {}

  @Post()
  create(@Body() createConsultTypeDto: CreateConsultTypeDto) {
    return this.consultTypeService.create(createConsultTypeDto);
  }

  @Get()
  findAll() {
    return this.consultTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsultTypeDto: UpdateConsultTypeDto) {
    return this.consultTypeService.update(+id, updateConsultTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultTypeService.remove(+id);
  }
}
