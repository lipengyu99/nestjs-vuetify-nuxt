import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { CoursesModule } from './courses/courses.module';
import { CommonModule } from '@app/common';

@Module({
  imports: [CommonModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
