import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { DentistsService } from 'src/dentists/dentists.service';
import { PatientsService } from 'src/patients/patients.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private dentistService: DentistsService,
        private patientService: PatientsService,
        private jwtService: JwtService
    ) { }

    async signIn(
        email: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usersService.findByEmail(email);
        console.log(email, pass);

        if (!user) {
            throw new UnauthorizedException({ message: 'User not found' });
        }
        // console.log(user);

        const isPasswordValid = await bcrypt.compare(pass, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException({ message: 'Invalid password' });
        }
        let related_entity = null;
        if (user.type === 'dentist') {
            related_entity = await this.dentistService.findByUser(user.id);
        } else if (user.type === 'patient') {
            related_entity = await this.patientService.findByUser(user.id);
        }
        const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
            type: user.type,
            phoneNumber: user.phoneNumber,
            avatar: '',
            birthDay: related_entity.birthday,
            address: user.address,
            bio: user.bio,
            related: related_entity,
        };
        console.log(payload);

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}