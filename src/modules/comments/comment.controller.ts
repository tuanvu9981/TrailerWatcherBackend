import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { Comment } from './entities/comment.entity';

@Controller('comments')
export class CommentController {
  constructor(
    private readonly service: CommentService
  ) { }

  @Post()
  async create(
    @Body()
    dto: CommentDto
  ): Promise<Comment> {
    return await this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<Comment[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string
  ): Promise<Comment> {
    return this.service.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id')
    id: string,

    @Body()
    newDto: CommentDto
  ): Promise<Comment> {
    return this.service.update(+id, newDto);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string
  ) {
    return this.service.remove(+id);
  }
}
