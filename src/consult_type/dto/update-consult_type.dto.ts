import { PartialType } from '@nestjs/mapped-types';
import { CreateConsultTypeDto } from './create-consult_type.dto';

export class UpdateConsultTypeDto extends PartialType(CreateConsultTypeDto) {}
