import { Test, TestingModule } from '@nestjs/testing';
import { DentalClinicService } from './dental_clinic.service';

describe('DentalClinicService', () => {
  let service: DentalClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DentalClinicService],
    }).compile();

    service = module.get<DentalClinicService>(DentalClinicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
