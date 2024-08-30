import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('patient')
  createPatient(@Body() createUserDto: Partial<User>): Promise<User> {
    const { patient, ...userData } = createUserDto;
    return this.usersService.createUserWithPatient(userData, patient);
  }
  @Post('dentist')
  createDentist(@Body() createUserDto: Partial<User>): Promise<User> {
    const { dentist, ...userData } = createUserDto;
    return this.usersService.createUserWithDentist(userData, dentist);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }
}
