import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/interface/base.service';
import { Repository } from 'typeorm';
import { CommentDto } from './dto/comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService extends BaseService<Comment> {
  constructor(
    @InjectRepository(Comment)
    protected repository: Repository<Comment>
  ) {
    super();
    this.repository = repository;
  }

  async findOne(id: number): Promise<Comment> {
    return await this.repository.findOneBy({ id });
  }
}
