import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
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
        console.log(user);

        const isPasswordValid = await bcrypt.compare(pass, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException({ message: 'Invalid password' });
        }
        const payload = {
            id: user.id, email: user.email, name: user.name, type: user.type, phoneNumber: user.phoneNumber, avatar: '', birthDay: '',
            address: user.address,
            bio: user.bio,
        };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}