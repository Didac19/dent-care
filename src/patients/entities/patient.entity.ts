import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { DentalClinic } from 'src/dental_clinic/entities/dental_clinic.entity';

@Entity('patient')
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column({ nullable: true, name: 'second_last_name' })
    secondLastName: string;

    @Column({ nullable: true, name: 'phone_number' })
    phoneNumber: string;

    @Column({ nullable: true, name: 'identification_card_number' })
    identificationCardNumber: string;

    @Column({ nullable: true })
    gender: string;

    @Column({ type: 'timestamptz', nullable: true })
    birthday: Date;

    @Column({ nullable: true, name: 'special_notes' })
    specialNotes: string;

    @Column({ nullable: true })
    occupation: string;

    @Column({ type: 'timestamptz', nullable: true, name: 'enrollment_date' })
    enrollmentDate: Date;

    @Column({ nullable: true, name: 'responsible_phone_number' })
    responsiblePhoneNumber: string;

    @Column({ nullable: true, name: 'responsible_person_name' })
    responsiblePersonName: string;

    @Column({ nullable: true })
    eps: string;

    @Column({ nullable: true, name: 'birth_place' })
    birthPlace: string;

    @Column({ nullable: true, name: 'usual_residence' })
    usualResidence: string;

    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Date;

    @OneToOne(() => User, (user) => user.patient, { onDelete: 'CASCADE' })
    @JoinColumn({})
    user: User;

    @ManyToOne(() => DentalClinic, (clinic) => clinic.patients)
    clinic: DentalClinic
}
