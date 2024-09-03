import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkingDayService } from './working_day.service';
import { CreateWorkingDayDto } from './dto/create-working_day.dto';
import { UpdateWorkingDayDto } from './dto/update-working_day.dto';

@Controller('working-day')
export class WorkingDayController {
  constructor(private readonly workingDayService: WorkingDayService) {}

  @Post()
  create(@Body() createWorkingDayDto: CreateWorkingDayDto) {
    return this.workingDayService.create(createWorkingDayDto);
  }

  @Get()
  findAll() {
    return this.workingDayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workingDayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkingDayDto: UpdateWorkingDayDto) {
    return this.workingDayService.update(+id, updateWorkingDayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workingDayService.remove(+id);
  }
}
