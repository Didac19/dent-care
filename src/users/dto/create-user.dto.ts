import { IsEmail, IsString, IsOptional, IsBoolean, IsNumber, IsDateString } from 'class-validator';
import { Patient } from '../../patients/entities/patient.entity';
import { Dentist } from '../../dentists/entities/dentist.entity';
import { Secretary } from '../../secretary/entities/secretary.entity';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsNumber()
    role: number;

    @IsString()
    @IsOptional()
    status?: string = 'incomplete';

    @IsString()
    @IsOptional()
    phoneNumber?: string;

    @IsString()
    @IsOptional()
    idCardNumber?: string;

    @IsBoolean()
    @IsOptional()
    emailVerified?: boolean = false;

    @IsDateString()
    @IsOptional()
    createdAt?: Date;

    @IsDateString()
    @IsOptional()
    updatedAt?: Date;

    @IsString()
    type: string;

    @IsOptional()
    patient?: Patient;

    @IsOptional()
    dentist?: Dentist;

    @IsOptional()
    secretary?: Secretary;
}