import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('Patients')
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    secondLastName: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column({ nullable: true })
    identificationCardNumber: string;

    @Column({ nullable: true })
    gender: string;

    @Column({ type: 'timestamptz', nullable: true })
    birthday: Date;

    @Column({ nullable: true })
    specialNotes: string;

    @Column({ nullable: true })
    occupation: string;

    @Column({ type: 'timestamptz', nullable: true })
    enrollmentDate: Date;

    @Column({ nullable: true })
    responsiblePhoneNumber: string;

    @Column({ nullable: true })
    responsiblePersonName: string;

    @Column({ nullable: true })
    eps: string;

    @Column({ nullable: true })
    birthPlace: string;

    @Column({ nullable: true })
    usualResidence: string;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;

    @OneToOne(() => User, (user) => user.patient)
    @JoinColumn()
    user: User;
}
