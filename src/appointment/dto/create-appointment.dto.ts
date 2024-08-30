export class CreateAppointmentDto {
    dentistId: number;
    patientId: number;
    secretaryId?: number;
    consultTypeId: number;
    status: 'pending' | 'confirmed' | 'cancelled';
    notes?: string;
    visible: boolean;
    createdAt: Date;
}