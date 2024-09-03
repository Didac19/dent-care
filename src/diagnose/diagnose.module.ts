import { Module } from '@nestjs/common';
import { DiagnoseService } from './diagnose.service';
import { DiagnoseController } from './diagnose.controller';

@Module({
  controllers: [DiagnoseController],
  providers: [DiagnoseService],
})
export class DiagnoseModule {}
