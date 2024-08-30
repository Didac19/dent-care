import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('consult_type')
export class ConsultType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'time' })
    duration: string;

    @Column({ type: 'double precision' })
    price: number;

    @Column({ type: 'boolean', default: true })
    patient_visible: boolean;

    @Column({ type: 'boolean', default: false })
    previous_appointment: boolean;

    @CreateDateColumn({ type: 'timestamp with time zone', name: 'createdAt' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp with time zone', name: 'updatedAt' })
    updated_at: Date;
}
