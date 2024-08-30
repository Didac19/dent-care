import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Dentist } from '../../dentists/entities/dentist.entity';
import { Patient } from '../../patients/entities/patient.entity';
import { Secretary } from '../../secretary/entities/secretary.entity';
import { ConsultType } from '../../consult_type/entities/consult_type.entity';

@Entity('appointment')
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;
    @Column()
    notes: string;

    @Column({ name: 'visible', type: 'boolean', default: true })
    visible: boolean;

    @ManyToOne(() => Dentist, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'dentist_id' })
    dentist: Dentist;

    @ManyToOne(() => Patient, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'patient_id' })
    patient: Patient;

    @ManyToOne(() => Secretary, { nullable: true })
    @JoinColumn({ name: 'secretary_id' })
    secretary: Secretary;

    @ManyToOne(() => ConsultType)
    @JoinColumn({ name: 'consult_type_id' })
    consultationType: ConsultType;
    @Column({ name: 'appointment_date_hour', type: 'timestamp with time zone', nullable: true })
    appointmentDateHour: Date;
    @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp with time zone', name: 'updated_at' })
    updatedAt: Date;

}
