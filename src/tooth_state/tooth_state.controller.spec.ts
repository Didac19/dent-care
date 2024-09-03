import { Test, TestingModule } from '@nestjs/testing';
import { ToothStateController } from './tooth_state.controller';
import { ToothStateService } from './tooth_state.service';

describe('ToothStateController', () => {
  let controller: ToothStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToothStateController],
      providers: [ToothStateService],
    }).compile();

    controller = module.get<ToothStateController>(ToothStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
