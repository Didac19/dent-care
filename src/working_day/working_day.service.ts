import { Injectable } from '@nestjs/common';
import { CreateWorkingDayDto } from './dto/create-working_day.dto';
import { UpdateWorkingDayDto } from './dto/update-working_day.dto';

@Injectable()
export class WorkingDayService {
  create(createWorkingDayDto: CreateWorkingDayDto) {
    return 'This action adds a new workingDay';
  }

  findAll() {
    return `This action returns all workingDay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workingDay`;
  }

  update(id: number, updateWorkingDayDto: UpdateWorkingDayDto) {
    return `This action updates a #${id} workingDay`;
  }

  remove(id: number) {
    return `This action removes a #${id} workingDay`;
  }
}
