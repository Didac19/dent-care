import { PartialType } from '@nestjs/mapped-types';
import { CreateDentalClinicDto } from './create-dental_clinic.dto';

export class UpdateDentalClinicDto extends PartialType(CreateDentalClinicDto) {}
