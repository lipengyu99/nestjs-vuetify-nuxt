import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { Course } from '@libs/db/models/course.model';

@Module({
  imports:[Course],
  controllers: [CoursesController]
})
export class CoursesModule {}
