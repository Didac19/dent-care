import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('patient')
  createPatient(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUserWithPatient(createUserDto);
  }

  @Post('dentist')
  createDentist(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUserWithDentist(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }
  @Get(':email')
  findByEmail(@Param('email') email: string): Promise<User> {
    return this.usersService.findByEmail(email);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    console.log('updateUserDto', updateUserDto);
    return this.usersService.update(id, updateUserDto);
  }
}
