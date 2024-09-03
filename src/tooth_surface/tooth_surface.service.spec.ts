import { Test, TestingModule } from '@nestjs/testing';
import { ToothSurfaceService } from './tooth_surface.service';

describe('ToothSurfaceService', () => {
  let service: ToothSurfaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToothSurfaceService],
    }).compile();

    service = module.get<ToothSurfaceService>(ToothSurfaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
