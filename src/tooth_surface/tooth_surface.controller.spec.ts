import { Test, TestingModule } from '@nestjs/testing';
import { ToothSurfaceController } from './tooth_surface.controller';
import { ToothSurfaceService } from './tooth_surface.service';

describe('ToothSurfaceController', () => {
  let controller: ToothSurfaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToothSurfaceController],
      providers: [ToothSurfaceService],
    }).compile();

    controller = module.get<ToothSurfaceController>(ToothSurfaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
