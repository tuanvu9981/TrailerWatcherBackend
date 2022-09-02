import { Injectable } from '@nestjs/common';
import { CreateFamousReviewDto } from './dto/create-famous-review.dto';
import { UpdateFamousReviewDto } from './dto/update-famous-review.dto';

@Injectable()
export class FamousReviewService {
  create(createFamousReviewDto: CreateFamousReviewDto) {
    return 'This action adds a new famousReview';
  }

  findAll() {
    return `This action returns all famousReview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} famousReview`;
  }

  update(id: number, updateFamousReviewDto: UpdateFamousReviewDto) {
    return `This action updates a #${id} famousReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} famousReview`;
  }
}
