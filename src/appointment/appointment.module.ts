// src/appointment/appointment.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { Appointment } from './entities/appointment.entity';
import { Dentist } from '../dentists/entities/dentist.entity';
import { Patient } from '../patients/entities/patient.entity';
import { Secretary } from '../secretary/entities/secretary.entity';
import { ConsultType } from '../consult_type/entities/consult_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appointment, Dentist, Patient, Secretary, ConsultType]),
  ],
  providers: [AppointmentService],
  controllers: [AppointmentController],
})
export class AppointmentModule { }