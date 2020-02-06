import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from '@libs/db/models/user.model';
import { Course } from '@libs/db/models/course.model';
import { Episode } from '@libs/db/models/episode.model';

const models = TypegooseModule.forFeature([
  User, Course, Episode,
])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://127.0.0.1:27017/nestjs-vuetify-nuxt', {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true
    }), models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule { }
