import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserSignInDto } from './dto/user-sign-in.dto';
import { UserSignUpDto, UserUpdateDto } from './dto/user-sign-up.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly service: UserService
  ) { }

  @Post('/sign-up')
  async create(
    @Body()
    dto: UserSignUpDto
  ): Promise<User> {
    return await this.service.signUpWithEmailAndPassword(dto);
  }

  @Post('/sign-in')
  async signIn(
    @Body()
    dto: UserSignInDto
  ): Promise<User|Object> {
    return await this.service.signInWithEmailAndPassword(dto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string
  ): Promise<User> {
    return await this.service.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id')
    id: string,

    @Body()
    newDto: UserUpdateDto
  ): Promise<User> {
    await this.service.update(+id, newDto);
    return await this.service.findOne(+id);
  }

  @Delete(':id')
  async remove(
    @Param('id')
    id: string
  ): Promise<void> {
    return await this.service.remove(+id);
  }
}
