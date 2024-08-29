import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) { }

  async findAll(): Promise<Patient[]> {
    return this.patientRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<Patient> {
    return this.patientRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }
}
