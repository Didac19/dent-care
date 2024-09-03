import { Injectable } from '@nestjs/common';
import { CreateOdontogramDto } from './dto/create-odontogram.dto';
import { UpdateOdontogramDto } from './dto/update-odontogram.dto';

@Injectable()
export class OdontogramService {
  create(createOdontogramDto: CreateOdontogramDto) {
    return 'This action adds a new odontogram';
  }

  findAll() {
    return `This action returns all odontogram`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odontogram`;
  }

  update(id: number, updateOdontogramDto: UpdateOdontogramDto) {
    return `This action updates a #${id} odontogram`;
  }

  remove(id: number) {
    return `This action removes a #${id} odontogram`;
  }
}
