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
  async findByClinic(id: number): Promise<Patient[]> {
    return this.patientRepository.find({
      where: { clinic: { id: id } },
      relations: ['user', 'clinic'],
    });
  }
  async findByUser(user_id: number): Promise<Patient> {
    return this.patientRepository.findOne({
      where: { user: { id: user_id } }, relations: ['clinic']
    });
  }
}
