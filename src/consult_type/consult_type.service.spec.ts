import { Test, TestingModule } from '@nestjs/testing';
import { ConsultTypeService } from './consult_type.service';

describe('ConsultTypeService', () => {
  let service: ConsultTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultTypeService],
    }).compile();

    service = module.get<ConsultTypeService>(ConsultTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
