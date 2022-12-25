import {
  Controller,
  Body,
  Post,
  UseGuards,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger/dist/decorators';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: '회원가입' })
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authcredentialDto: AuthCredentialDto,
  ): Promise<void> {
    return this.authService.signUp(authcredentialDto);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }

  @ApiOperation({ summary: '토큰 인증 테스트' })
  @Post('/authTest')
  @UseGuards(AuthGuard())
  authTest(@GetUser() user: User) {
    console.log(user);
  }
}
