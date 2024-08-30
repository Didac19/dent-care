import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { Dentist } from '../dentists/entities/dentist.entity';
import { Patient } from '../patients/entities/patient.entity';
import { Secretary } from '../secretary/entities/secretary.entity';
import { ConsultType } from '../consult_type/entities/consult_type.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    @InjectRepository(Dentist)
    private readonly dentistRepository: Repository<Dentist>,
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
    @InjectRepository(Secretary)
    private readonly secretaryRepository: Repository<Secretary>,
    @InjectRepository(ConsultType)
    private readonly consultTypeRepository: Repository<ConsultType>,
  ) { }

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const { dentistId, patientId, secretaryId, consultTypeId, ...appointmentData } = createAppointmentDto;

    const dentist = await this.dentistRepository.findOne({ where: { id: dentistId } });
    if (!dentist) {
      throw new NotFoundException(`Dentist with ID ${dentistId} not found`);
    }

    const patient = await this.patientRepository.findOne({ where: { id: patientId } });
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    const consultType = await this.consultTypeRepository.findOne({ where: { id: consultTypeId } });
    if (!consultType) {
      throw new NotFoundException(`ConsultType with ID ${consultTypeId} not found`);
    }

    let secretary: Secretary = null;
    if (secretaryId) {
      secretary = await this.secretaryRepository.findOne({ where: { id: secretaryId } });
      if (!secretary) {
        throw new NotFoundException(`Secretary with ID ${secretaryId} not found`);
      }
    }

    const appointment = this.appointmentRepository.create({
      ...appointmentData,
      dentist,
      patient,
      secretary,
      consultationType: consultType,
    });

    return await this.appointmentRepository.save(appointment);
  }

  async findAll(): Promise<Appointment[]> {
    return await this.appointmentRepository.find({ relations: ['dentist', 'patient', 'secretary', 'consultationType'] });
  }

  async find(id: number): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne({ where: { id }, relations: ['dentist', 'patient', 'secretary', 'consultationType'] });
    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    return appointment;
  }

  async update(id: number, data: any): Promise<Appointment> {
    const { dentistId, patientId, secretaryId, consultTypeId, ...appointmentData } = data;

    const appointment = await this.find(id);

    if (dentistId) {
      const dentist = await this.dentistRepository.findOne({ where: { id: dentistId } });
      if (!dentist) {
        throw new NotFoundException(`Dentist with ID ${dentistId} not found`);
      }
      appointment.dentist = dentist;
    }

    if (patientId) {
      const patient = await this.patientRepository.findOne({ where: { id: patientId } });
      if (!patient) {
        throw new NotFoundException(`Patient with ID ${patientId} not found`);
      }
      appointment.patient = patient;
    }

    if (consultTypeId) {
      const consultType = await this.consultTypeRepository.findOne({ where: { id: consultTypeId } });
      if (!consultType) {
        throw new NotFoundException(`ConsultType with ID ${consultTypeId} not found`);
      }
      appointment.consultationType = consultType;
    }

    if (secretaryId) {
      const secretary = await this.secretaryRepository.findOne({ where: { id: secretaryId } });
      if (!secretary) {
        throw new NotFoundException(`Secretary with ID ${secretaryId} not found`);
      }
      appointment.secretary = secretary;
    }

    Object.assign(appointment, appointmentData);

    return await this.appointmentRepository.save(appointment);
  }

  async remove(id: number): Promise<void> {
    const result = await this.appointmentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
  }
}