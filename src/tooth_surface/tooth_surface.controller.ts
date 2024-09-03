import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToothSurfaceService } from './tooth_surface.service';
import { CreateToothSurfaceDto } from './dto/create-tooth_surface.dto';
import { UpdateToothSurfaceDto } from './dto/update-tooth_surface.dto';

@Controller('tooth-surface')
export class ToothSurfaceController {
  constructor(private readonly toothSurfaceService: ToothSurfaceService) {}

  @Post()
  create(@Body() createToothSurfaceDto: CreateToothSurfaceDto) {
    return this.toothSurfaceService.create(createToothSurfaceDto);
  }

  @Get()
  findAll() {
    return this.toothSurfaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toothSurfaceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToothSurfaceDto: UpdateToothSurfaceDto) {
    return this.toothSurfaceService.update(+id, updateToothSurfaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toothSurfaceService.remove(+id);
  }
}
