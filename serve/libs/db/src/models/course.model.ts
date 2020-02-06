import { prop, arrayProp, Ref, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from '@libs/db/models/episode.model';
@modelOptions({
    schemaOptions: {
        timestamps: true,
        toJSON: { virtuals: true },
    },
})
export class Course {
    @ApiProperty({ description: '标题' })
    @prop()
    title: string;

    @ApiProperty({ description: '封面' })
    @prop()
    cover: string;

    @ApiProperty({ description: '虚拟字段' })
    @arrayProp({
        ref: 'Episode',
        localField: '_id',
        foreignField: 'course',
    })
    episodes: Ref<Episode>[];

}