import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';

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
  ],
})
export class AppModule { }
