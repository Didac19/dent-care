export class CreatePatientDto {
    name: string;
    lastName: string;
    secondLastName?: string;
    phoneNumber?: string;
    identificationCardNumber?: string;
    gender?: string;
    birthday?: Date;
    specialNotes?: string;
    occupation?: string;
    enrollmentDate?: Date;
    responsiblePhoneNumber?: string;
    responsiblePersonName?: string;
    eps?: string;
    birthPlace?: string;
    usualResidence?: string;
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    user?: any;
}

