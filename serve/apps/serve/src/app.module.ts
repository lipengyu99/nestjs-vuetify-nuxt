import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [DbModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
