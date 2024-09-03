import { Injectable } from '@nestjs/common';
import { CreateDentalClinicDto } from './dto/create-dental_clinic.dto';
import { UpdateDentalClinicDto } from './dto/update-dental_clinic.dto';
import { Repository } from 'typeorm';
import { Patient } from 'src/patients/entities/patient.entity';
import { Dentist } from 'src/dentists/entities/dentist.entity';
import { DentalClinic } from 'src/dental_clinic/entities/dental_clinic.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class DentalClinicService {
  constructor(
    @InjectRepository(Dentist)
    private readonly dentistRepository: Repository<Dentist>,
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
    @InjectRepository(DentalClinic)
    private readonly clinicRepository: Repository<Patient>,
  ) { }


  create(createDentalClinicDto: CreateDentalClinicDto) {
    return 'This action adds a new dentalClinic';
  }

  findAll() {
    return `This action returns all dentalClinic`;
  }

  findOne(id: number) {
    return this.clinicRepository.findOne({
      where: { id },
      relations: ['patients', 'dentists'],
    });
  }

  update(id: number, updateDentalClinicDto: UpdateDentalClinicDto) {
    return `This action updates a #${id} dentalClinic`;
  }

  remove(id: number) {
    return `This action removes a #${id} dentalClinic`;
  }
}
