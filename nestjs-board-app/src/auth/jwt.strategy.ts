import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

// 어디서나 주입해서 사용할 수 있도록 설정
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      secretOrKey: 'Secret1234',
      // 토큰 유효성 체크 (Bearer Token 방식)
      JwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // 위에서 토큰이 유효한지 체크가 되면 validate 메소드에서 payload에 있는 유저이름이
  // DB에 있는 유저인지 확인 후 있다면 유저 객체를 return한다.
  // return 값은 @UseGuards(AuthGuard())를 이용한 모든 요청의 Request Object에 들어간다.
  async validate(payload) {
    const { username } = payload;
    const user: User = await this.userRepository.findOneBy({
      username: username,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
