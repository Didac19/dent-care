import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('secretary')
export class Secretary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ name: 'last_name', type: 'varchar', length: 255 })
    lastName: string;

    @Column({ type: 'timestamp with time zone' })
    birthday: Date;

    @Column({ type: 'varchar', length: 255 })
    gender: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @Column({ name: 'phone_number', type: 'varchar', length: 255 })
    phoneNumber: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
    updatedAt: Date;

    @OneToOne(() => User, (user) => user.secretary)
    @JoinColumn()
    user: User;
}