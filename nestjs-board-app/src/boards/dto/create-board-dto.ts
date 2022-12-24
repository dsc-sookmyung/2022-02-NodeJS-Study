import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @ApiProperty({
    example: 'title',
    description: '글 제목',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'description',
    description: '글 내용',
  })
  @IsNotEmpty()
  description: string;
}
