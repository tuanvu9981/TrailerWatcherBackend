import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/interface/base.service';
import { Repository } from 'typeorm';
import { ActorDto } from './dto/actor.dto';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorService extends BaseService<Actor> {

  constructor(
    @InjectRepository(Actor)
    protected repository: Repository<Actor>
  ) {
    super();
    this.repository = repository;
  }

  async findOne(id: number): Promise<Actor> {
    return await this.repository.findOneBy({ id });
  }

}
