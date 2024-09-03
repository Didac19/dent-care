import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Patient } from 'src/patients/entities/patient.entity';
import { Dentist } from 'src/dentists/entities/dentist.entity';
import { WorkingDay } from 'src/working_day/entities/working_day.entity';

@Entity('dental_clinic')
export class DentalClinic {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @Column({ name: 'phone_number' })
    phoneNumber: string

    @Column()
    email: string

    @OneToMany(() => Patient, (patient) => patient.clinic)
    patients: Patient[]

    @OneToMany(() => Dentist, (dentist) => dentist.clinic)
    dentists: Dentist[]

    @OneToMany(() => WorkingDay, (day) => day.clinic)
    working_days: WorkingDay[]

    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Date;
}
