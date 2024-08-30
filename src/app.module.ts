import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { DentistsModule } from './dentists/dentists.module';
import { ConsultTypeModule } from './consult_type/consult_type.module';
import { SecretaryModule } from './secretary/secretary.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'dental_care',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // This automatically syncs the schema to your database
    }),
    UsersModule,
    PatientsModule,
    DentistsModule,
    ConsultTypeModule,
    SecretaryModule,
    AppointmentModule,
  ],
})
export class AppModule { }
