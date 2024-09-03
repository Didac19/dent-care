import { Test, TestingModule } from '@nestjs/testing';
import { ToothStateService } from './tooth_state.service';

describe('ToothStateService', () => {
  let service: ToothStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToothStateService],
    }).compile();

    service = module.get<ToothStateService>(ToothStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
