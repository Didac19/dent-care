import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';
import { DentalClinicModule } from './dental_clinic/dental_clinic.module';
import { ScheduleModule } from './schedule/schedule.module';
import { WorkingDayModule } from './working_day/working_day.module';
import { OdontogramModule } from './odontogram/odontogram.module';
import { ToothModule } from './tooth/tooth.module';
import { TreatmentModule } from './treatment/treatment.module';
import { DiagnoseModule } from './diagnose/diagnose.module';
import { ToothStateModule } from './tooth_state/tooth_state.module';
import { ToothSurfaceModule } from './tooth_surface/tooth_surface.module';
import { InventoryModule } from './inventory/inventory.module';
import { InventoryItemsModule } from './inventory_items/inventory_items.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule globally available
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<string>('DB_TYPE') as 'aurora-mysql' | 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'oracle' | 'mongodb',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // This automatically syncs the schema to your database
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AppointmentModule,
    AuthModule,
    DentalClinicModule,
    ScheduleModule,
    WorkingDayModule,
    OdontogramModule,
    ToothModule,
    TreatmentModule,
    DiagnoseModule,
    ToothStateModule,
    ToothSurfaceModule,
    InventoryModule,
    InventoryItemsModule,
  ],
})
export class AppModule { }