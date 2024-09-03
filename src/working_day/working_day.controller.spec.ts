import { Test, TestingModule } from '@nestjs/testing';
import { WorkingDayController } from './working_day.controller';
import { WorkingDayService } from './working_day.service';

describe('WorkingDayController', () => {
  let controller: WorkingDayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingDayController],
      providers: [WorkingDayService],
    }).compile();

    controller = module.get<WorkingDayController>(WorkingDayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
