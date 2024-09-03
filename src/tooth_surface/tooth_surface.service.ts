import { Injectable } from '@nestjs/common';
import { CreateToothSurfaceDto } from './dto/create-tooth_surface.dto';
import { UpdateToothSurfaceDto } from './dto/update-tooth_surface.dto';

@Injectable()
export class ToothSurfaceService {
  create(createToothSurfaceDto: CreateToothSurfaceDto) {
    return 'This action adds a new toothSurface';
  }

  findAll() {
    return `This action returns all toothSurface`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toothSurface`;
  }

  update(id: number, updateToothSurfaceDto: UpdateToothSurfaceDto) {
    return `This action updates a #${id} toothSurface`;
  }

  remove(id: number) {
    return `This action removes a #${id} toothSurface`;
  }
}
