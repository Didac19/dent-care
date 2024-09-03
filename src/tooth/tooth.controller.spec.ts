import { Test, TestingModule } from '@nestjs/testing';
import { ToothController } from './tooth.controller';
import { ToothService } from './tooth.service';

describe('ToothController', () => {
  let controller: ToothController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToothController],
      providers: [ToothService],
    }).compile();

    controller = module.get<ToothController>(ToothController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
