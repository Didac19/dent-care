import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToothStateService } from './tooth_state.service';
import { CreateToothStateDto } from './dto/create-tooth_state.dto';
import { UpdateToothStateDto } from './dto/update-tooth_state.dto';

@Controller('tooth-state')
export class ToothStateController {
  constructor(private readonly toothStateService: ToothStateService) {}

  @Post()
  create(@Body() createToothStateDto: CreateToothStateDto) {
    return this.toothStateService.create(createToothStateDto);
  }

  @Get()
  findAll() {
    return this.toothStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toothStateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToothStateDto: UpdateToothStateDto) {
    return this.toothStateService.update(+id, updateToothStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toothStateService.remove(+id);
  }
}
