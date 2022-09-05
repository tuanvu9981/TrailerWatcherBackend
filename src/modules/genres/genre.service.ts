import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/interface/base.service';
import { Repository } from 'typeorm';
import { GenreDto } from './dto/genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService extends BaseService<Genre>{
  constructor(
    @InjectRepository(Genre)
    protected repository: Repository<Genre>
  ) {
    super();
    this.repository = repository;
  }

  async findOne(id: number): Promise<Genre> {
    return await this.repository.findOneBy({ id });
  }

  async findByName(name: string): Promise<Genre> {
    return await this.repository.findOneBy({ "name": name })
  }
}
