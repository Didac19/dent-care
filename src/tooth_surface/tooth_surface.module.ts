import { Module } from '@nestjs/common';
import { ToothSurfaceService } from './tooth_surface.service';
import { ToothSurfaceController } from './tooth_surface.controller';

@Module({
  controllers: [ToothSurfaceController],
  providers: [ToothSurfaceService],
})
export class ToothSurfaceModule {}
