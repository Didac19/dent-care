import { IsEmail, IsString, IsOptional, IsBoolean, IsNumber, IsDateString } from 'class-validator';

export class UpdateUserDto {
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

    @IsDateString()
    @IsOptional()
    birthDay?: Date;
}
