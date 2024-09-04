import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsService } from 'src/patients/patients.service';
import { DentistsService } from 'src/dentists/dentists.service';
import { PatientsModule } from 'src/patients/patients.module';
import { DentistsModule } from 'src/dentists/dentists.module';

@Module({
  imports: [
    PatientsModule, DentistsModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, PatientsService, DentistsService],
  controllers: [AuthController],
  exports: [AuthService, PatientsService, DentistsService],
})
export class AuthModule { }