import { Injectable } from '@nestjs/common';
import { CreateDentistDto } from './dto/create-dentist.dto';
import { UpdateDentistDto } from './dto/update-dentist.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dentist } from './entities/dentist.entity';
@Injectable()
export class DentistsService {
  constructor(
    @InjectRepository(Dentist)
    private readonly dentistRepository: Repository<Dentist>,
  ) { }
  create(createDentistDto: CreateDentistDto) {
    return 'This action adds a new dentist';
  }

  findAll() {
    return `This action returns all dentists`;
  }

  async findOne(id: number): Promise<Dentist> {
    return this.dentistRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async findByUser(user_id: number): Promise<Dentist> {
    return this.dentistRepository.findOne({
      where: { user: { id: user_id } }, relations: ['clinic']
    });
  }

  update(id: number, updateDentistDto: UpdateDentistDto) {
    return `This action updates a #${id} dentist`;
  }

  remove(id: number) {
    return `This action removes a #${id} dentist`;
  }
}
