import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserRepository } from './user.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // Inject Repository to Service : 의존성 주입
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.userRepository.createUser(authCredentialDto);
  }

  async signIn(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialDto;
    const user = await this.userRepository.findOneBy({ username: username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 (Secret + Payload)
      const payload = { username };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Login Failed');
    }
  }
}
