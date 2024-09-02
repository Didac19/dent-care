import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DentistsService } from './dentists.service';
import { DentistsController } from './dentists.controller';
import { Dentist } from './entities/dentist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dentist])],
  providers: [DentistsService],
  controllers: [DentistsController],
  exports: [DentistsService, TypeOrmModule],
})
export class DentistsModule { }
