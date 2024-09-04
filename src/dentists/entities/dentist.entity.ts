import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne, Timestamp } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { DentalClinic } from 'src/dental_clinic/entities/dental_clinic.entity';

@Entity('dentist')
export class Dentist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255, name: 'last_name' })
    lastName: string;

    @Column({ type: 'varchar', length: 255, name: 'phone_number', nullable: true })
    phoneNumber: string;


    @Column({ nullable: true, type: 'timestamp' })
    birthday: Date;

    @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp with time zone', name: 'updated_at' })
    updatedAt: Date;

    @OneToOne(() => User, (user) => user.dentist, { onDelete: 'CASCADE' })
    @JoinColumn({})
    user: User;

    @ManyToOne(() => DentalClinic, (clinic) => clinic.dentists)
    clinic: DentalClinic
}
