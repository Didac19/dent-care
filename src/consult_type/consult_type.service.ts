import { Injectable } from '@nestjs/common';
import { CreateConsultTypeDto } from './dto/create-consult_type.dto';
import { UpdateConsultTypeDto } from './dto/update-consult_type.dto';

@Injectable()
export class ConsultTypeService {
  create(createConsultTypeDto: CreateConsultTypeDto) {
    return 'This action adds a new consultType';
  }

  findAll() {
    return `This action returns all consultType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consultType`;
  }

  update(id: number, updateConsultTypeDto: UpdateConsultTypeDto) {
    return `This action updates a #${id} consultType`;
  }

  remove(id: number) {
    return `This action removes a #${id} consultType`;
  }
}
