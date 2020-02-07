import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, ReturnModelType } from '@typegoose/typegoose/lib/types';
import { User, UserDocument } from '@libs/db/models/user.model';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
@ApiTags('登录组件')
export class AuthController {

    constructor(
        private jwtService:JwtService,
        @InjectModel(User) private model:ReturnModelType<typeof User>){}

    @Post('register')
    @ApiOperation({ summary:'注册'})
    async register(@Body() dto:RegisterDto){
        const {username,password} = dto
        const user= await this.model.create({
            username,
            password,
        });
        return user
    }

    @Post('login')
    @ApiOperation({ summary:'登陆'})
     @UseGuards(AuthGuard('local'))
    async login(@Body() dto: LoginDto, @Req() req) {
        return {
            token: this.jwtService.sign(String(req.user._id)),
        }
    }
//获取用户信息
    @Get('user')
    @ApiOperation({summary:'获取用户信息'})
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    async user(@Req() req){
        return req.user;
        
    }
}
