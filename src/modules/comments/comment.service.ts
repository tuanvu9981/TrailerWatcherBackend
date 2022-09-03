import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentDto } from './dto/comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private repository: Repository<Comment>
  ) { }

  async create(dto: CommentDto): Promise<Comment> {
    const newDocument = this.repository.create(dto);
    return this.repository.save(newDocument);
  }

  async findAll(): Promise<Comment[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Comment> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: number, newDto: CommentDto): Promise<Comment> {
    await this.repository.update(id, newDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
