import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActorDto } from './dto/actor.dto';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorService {

  constructor(
    @InjectRepository(Actor)
    private repository: Repository<Actor>
  ) { }

  async create(dto: ActorDto): Promise<Actor> {
    const newDocument = this.repository.create(dto);
    return this.repository.save(newDocument);
  }

  async findAll(): Promise<Actor[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Actor> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: number, dto: ActorDto): Promise<Actor> {
    await this.repository.update(id, dto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
