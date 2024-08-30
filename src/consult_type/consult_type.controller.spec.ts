import { Test, TestingModule } from '@nestjs/testing';
import { ConsultTypeController } from './consult_type.controller';
import { ConsultTypeService } from './consult_type.service';

describe('ConsultTypeController', () => {
  let controller: ConsultTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultTypeController],
      providers: [ConsultTypeService],
    }).compile();

    controller = module.get<ConsultTypeController>(ConsultTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
