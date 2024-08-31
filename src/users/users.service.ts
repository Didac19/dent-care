import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Patient } from '../patients/entities/patient.entity';
import { Dentist } from '../dentists/entities/dentist.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
const saltOrRounds = 10;
const password = 'random_password';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async createUserWithPatient(userDto: CreateUserDto): Promise<User> {
    if (!userDto || !userDto.password) {
      throw new Error('Invalid user data');
    }
    console.log('userDto', userDto);
    const hashedPassword = await bcrypt.hash(userDto.password, saltOrRounds);
    userDto.password = hashedPassword;
    const userData =
      await this.userRepository.create(
        userDto,
      );
    return this.userRepository.save(userData);
  }

  async createUserWithDentist(userDto: CreateUserDto): Promise<User> {
    if (!userDto || !userDto.password) {
      throw new Error('Invalid user data');
    }
    console.log('userDto', userDto);
    const hashedPassword = await bcrypt.hash(userDto.password, saltOrRounds);
    userDto.password = hashedPassword;
    const userData =
      await this.userRepository.create(
        userDto,
      );
    return this.userRepository.save(userData);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['patient'] });
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
      relations: ['patient'],
    });
  }
  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
      relations: ['patient'],
    });
  }
}