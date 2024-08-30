import { Module } from '@nestjs/common';
import { ConsultTypeService } from './consult_type.service';
import { ConsultTypeController } from './consult_type.controller';

@Module({
  controllers: [ConsultTypeController],
  providers: [ConsultTypeService],
})
export class ConsultTypeModule {}
