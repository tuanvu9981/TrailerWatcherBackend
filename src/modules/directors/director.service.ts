import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DirectorDto } from './dto/director.dto';
import { Director } from './entities/director.entity';

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(Director)
    private repository: Repository<Director>
  ) { }

  async create(dto: DirectorDto): Promise<Director> {
    const newDocument = this.repository.create(dto);
    return this.repository.save(newDocument);
  }

  async findAll(): Promise<Director[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Director> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: number, newDto: DirectorDto): Promise<Director> {
    await this.repository.update(id, newDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
