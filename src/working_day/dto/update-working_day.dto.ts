import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkingDayDto } from './create-working_day.dto';

export class UpdateWorkingDayDto extends PartialType(CreateWorkingDayDto) {}
