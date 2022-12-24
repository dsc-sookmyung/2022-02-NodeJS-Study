import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger/dist/decorators';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board-dto';
import { BoardStatusVaildationPipe } from './pipes/board-status-vaildation.pipe';

@ApiTags('boards')
@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @ApiOperation({ summary: '전체 게시글 조회' })
  @Get()
  getAllBoard(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  @ApiOperation({ summary: '게시글 작성' })
  @ApiBody({
    type: CreateBoardDto,
  })
  @Post()
  @UsePipes(ValidationPipe) // 유효성 체크
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }

  @ApiOperation({ summary: 'ID로 개별 게시글 조회' })
  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @ApiOperation({ summary: '게시글 삭제' })
  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardService.deleteBoard(id);
  }

  @ApiOperation({ summary: '게시글 상태 변경' })
  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusVaildationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.boardService.updateBoardStatus(id, status);
  }
}
