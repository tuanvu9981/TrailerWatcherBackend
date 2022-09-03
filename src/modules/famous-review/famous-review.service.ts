import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FamousReviewDto } from './dto/famous-review.dto';
import { FamousReview } from './entities/famous-review.entity';

@Injectable()
export class FamousReviewService {
  constructor(
    @InjectRepository(FamousReview)
    private repository: Repository<FamousReview>
  ) { }

  async create(dto: FamousReviewDto): Promise<FamousReview> {
    const newDocument = this.repository.create(dto);
    return this.repository.save(newDocument);
  }

  async findAll(): Promise<FamousReview[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<FamousReview> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: number, newDto: FamousReviewDto): Promise<FamousReview> {
    await this.repository.update(id, newDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
