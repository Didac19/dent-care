import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm';
import { DentalClinic } from 'src/dental_clinic/entities/dental_clinic.entity';


@Entity('working_day')
export class WorkingDay {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'time', name: 'open_time' })
    openTime: string;

    @Column()
    name: string

    @Column({ 'name': 'is_business_day' })
    isBusinessDay: boolean

    @Column({ type: 'time', name: 'close_time' })
    closeTime: string;

    @Column({ type: 'time', nullable: true, name: 'lunch_open_time' })
    lunchOpenTime: string;

    @Column({ type: 'time', nullable: true, name: 'lunch_close_time' })
    lunchCloseTime: string;

    @Column({ type: 'int', name: 'max_appointments_per_day' })
    maxAppointmentsPerDay: number;

    @ManyToOne(() => DentalClinic, (clinic) => clinic.working_days)
    @JoinColumn({})
    clinic: DentalClinic;
}
