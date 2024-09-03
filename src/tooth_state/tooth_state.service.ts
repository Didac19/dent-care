import { Injectable } from '@nestjs/common';
import { CreateToothStateDto } from './dto/create-tooth_state.dto';
import { UpdateToothStateDto } from './dto/update-tooth_state.dto';

@Injectable()
export class ToothStateService {
  create(createToothStateDto: CreateToothStateDto) {
    return 'This action adds a new toothState';
  }

  findAll() {
    return `This action returns all toothState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toothState`;
  }

  update(id: number, updateToothStateDto: UpdateToothStateDto) {
    return `This action updates a #${id} toothState`;
  }

  remove(id: number) {
    return `This action removes a #${id} toothState`;
  }
}
