import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/interface/base.service';
import { Repository } from 'typeorm';
import { DirectorDto } from './dto/director.dto';
import { Director } from './entities/director.entity';

@Injectable()
export class DirectorService extends BaseService<Director>{
  constructor(
    @InjectRepository(Director)
    protected repository: Repository<Director>
  ) {
    super();
    this.repository = repository;
  }

  async findOne(id: number): Promise<Director> {
    return await this.repository.findOneBy({ id });
  }
}
