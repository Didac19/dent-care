import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, TableInheritance } from 'typeorm';
import { Patient } from '../../patients/entities/patient.entity';


@Entity('Users')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    role: number;

    @Column({ default: 'uncompleted' })
    status: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column({ nullable: true })
    idCardNumber: string;

    @Column({ default: false })
    emailVerified: boolean;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;

    @Column()
    type: string;

    @OneToOne(() => Patient, (patient) => patient.user, { cascade: true, onDelete: 'CASCADE' })
    patient: Patient;

    // @OneToOne(() => Dentist, (dentist) => dentist.user, { cascade: true })
    // dentist: Dentist;
}
