import { Module } from '@nestjs/common';
import { WorkingDayService } from './working_day.service';
import { WorkingDayController } from './working_day.controller';

@Module({
  controllers: [WorkingDayController],
  providers: [WorkingDayService],
})
export class WorkingDayModule {}
