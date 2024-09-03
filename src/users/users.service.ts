import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Patient } from 'src/patients/entities/patient.entity';
import { Dentist } from 'src/dentists/entities/dentist.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
const saltOrRounds = 10;


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Dentist)
    private readonly dentistRepository: Repository<Dentist>,
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
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
      relations: ['patient', 'dentist'],
    });
  }
  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
      relations: ['patient'],
    });
  }
  async update(id: number, userDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }

    if (user.patient) {
      user.patient.birthday = userDto.birthDay;
      try {
        await this.patientRepository.update(user.patient.id, user.patient);
      }
      catch (error) {
        console.log(error);

      }
    }


    if (user.dentist !== null) {
      user.dentist.birthday = userDto.birthDay;
      try {
        await this.dentistRepository.update(user.dentist.id, user.dentist);
      } catch (error) {
        console.log(error)
      }
    }
    const hashedPassword = await bcrypt.hash(userDto.password, saltOrRounds);
    userDto.password = hashedPassword;
    const { birthDay, ...userDtoWithoutBirthDay } = userDto;

    try {
      await this.userRepository.update(id, userDtoWithoutBirthDay);
    } catch (error) {
      console.log(error);
    }
    return this.findOne(id);
  }
}