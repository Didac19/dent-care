import { PartialType } from '@nestjs/mapped-types';
import { CreateToothStateDto } from './create-tooth_state.dto';

export class UpdateToothStateDto extends PartialType(CreateToothStateDto) {}
