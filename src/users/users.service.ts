import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Patient } from '../patients/entities/patient.entity';
// import { Dentist } from '../dentists/entities/dentist.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async createUserWithPatient(userData: Partial<User>, patientData: Partial<Patient>): Promise<User> {
    const user = this.userRepository.create({
      ...userData,
      type: 'Patient', // Set the type column to 'patient'
    });
    const patient = new Patient();
    Object.assign(patient, patientData);
    user.patient = patient;
    return this.userRepository.save(user);
  }

  // async createUserWithDentist(userData: Partial<User>, dentistData: Partial<Dentist>): Promise<User> {
  //   const user = this.userRepository.create(userData);
  //   const dentist = new Dentist();
  //   Object.assign(dentist, dentistData);
  //   user.dentist = dentist;
  //   return this.userRepository.save(user);
  // }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['patient'] });
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
      relations: ['patient'],
    });
  }
}