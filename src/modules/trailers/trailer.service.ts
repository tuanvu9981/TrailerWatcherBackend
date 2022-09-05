import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/interface/base.service';
import { Repository } from 'typeorm';
import { Trailer } from './entities/trailer.entity';

@Injectable()
export class TrailerService extends BaseService<Trailer>{
  constructor(
    @InjectRepository(Trailer)
    protected repository: Repository<Trailer>
  ) {
    super();
    this.repository = repository;
  }

  async findOne(id: number): Promise<Trailer> {
    return await this.repository.findOneBy({ id });
  }
}
