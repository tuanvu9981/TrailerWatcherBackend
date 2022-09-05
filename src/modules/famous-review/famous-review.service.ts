import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/interface/base.service';
import { Repository } from 'typeorm';
import { FamousReviewDto } from './dto/famous-review.dto';
import { FamousReview } from './entities/famous-review.entity';

@Injectable()
export class FamousReviewService extends BaseService<FamousReview>{
  constructor(
    @InjectRepository(FamousReview)
    protected repository: Repository<FamousReview>
  ) {
    super();
    this.repository = repository;
  }

  async findOne(id: number): Promise<FamousReview> {
    return await this.repository.findOneBy({ id });
  }

}
