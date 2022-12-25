import { User } from 'src/auth/user.entity';
import { CustomRepository } from 'src/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board-dto';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(
    createboardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, description } = createboardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });

    await this.save(board);
    return board;
  }
}
