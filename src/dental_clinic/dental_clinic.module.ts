import { Module } from '@nestjs/common';
import { DentalClinicService } from './dental_clinic.service';
import { DentalClinicController } from './dental_clinic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsModule } from 'src/patients/patients.module';
import { DentistsModule } from 'src/dentists/dentists.module';
import { DentalClinic } from './entities/dental_clinic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DentalClinic]), PatientsModule, DentistsModule],
  controllers: [DentalClinicController],
  providers: [DentalClinicService],
  // exports: [DentalClinic]
})
export class DentalClinicModule { }
