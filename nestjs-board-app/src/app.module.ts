import { BoardsModule } from './boards/boards.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [BoardsModule],
})
export class AppModule {}
