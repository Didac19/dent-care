import { Injectable } from '@nestjs/common';
import { CreateDiagnoseDto } from './dto/create-diagnose.dto';
import { UpdateDiagnoseDto } from './dto/update-diagnose.dto';

@Injectable()
export class DiagnoseService {
  create(createDiagnoseDto: CreateDiagnoseDto) {
    return 'This action adds a new diagnose';
  }

  findAll() {
    return `This action returns all diagnose`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diagnose`;
  }

  update(id: number, updateDiagnoseDto: UpdateDiagnoseDto) {
    return `This action updates a #${id} diagnose`;
  }

  remove(id: number) {
    return `This action removes a #${id} diagnose`;
  }
}
