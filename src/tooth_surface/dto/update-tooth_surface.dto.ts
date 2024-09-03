import { PartialType } from '@nestjs/mapped-types';
import { CreateToothSurfaceDto } from './create-tooth_surface.dto';

export class UpdateToothSurfaceDto extends PartialType(CreateToothSurfaceDto) {}
