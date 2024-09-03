import { Module } from '@nestjs/common';
import { InventoryItemsService } from './inventory_items.service';
import { InventoryItemsController } from './inventory_items.controller';

@Module({
  controllers: [InventoryItemsController],
  providers: [InventoryItemsService],
})
export class InventoryItemsModule {}
