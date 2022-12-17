import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 다른 컴포넌트에서 변경하는 것 차단

  getAllBoards(): Board[] {
    return this.boards;
  }
}
