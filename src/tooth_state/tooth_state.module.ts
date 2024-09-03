import { Module } from '@nestjs/common';
import { ToothStateService } from './tooth_state.service';
import { ToothStateController } from './tooth_state.controller';

@Module({
  controllers: [ToothStateController],
  providers: [ToothStateService],
})
export class ToothStateModule {}
