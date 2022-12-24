import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialDto {
  @ApiProperty({
    example: 'username',
    description: '유저 이름',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @ApiProperty({
    example: 'password',
    description: '비밀번호',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/) // 영어, 숫자만 가능
  password: string;
}
