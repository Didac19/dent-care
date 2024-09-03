import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryItemDto } from './create-inventory_item.dto';

export class UpdateInventoryItemDto extends PartialType(CreateInventoryItemDto) {}
