import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity('schedule')
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'time' })
    openTime: string;

    @Column({ type: 'time' })
    closeTime: string;

    @Column({ type: 'time', nullable: true })
    lunchOpenTime: string;

    @Column({ type: 'time', nullable: true })
    lunchCloseTime: string;

    @Column({ type: 'int' })
    maxAppointmentsPerDay: number;


}
