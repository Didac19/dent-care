import { Module } from '@nestjs/common';
import { ToothService } from './tooth.service';
import { ToothController } from './tooth.controller';

@Module({
  controllers: [ToothController],
  providers: [ToothService],
})
export class ToothModule {}
