import { Test, TestingModule } from '@nestjs/testing';
import { DentalClinicController } from './dental_clinic.controller';
import { DentalClinicService } from './dental_clinic.service';

describe('DentalClinicController', () => {
  let controller: DentalClinicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DentalClinicController],
      providers: [DentalClinicService],
    }).compile();

    controller = module.get<DentalClinicController>(DentalClinicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
