import { Module } from '@nestjs/common';
import { FamousReviewService } from './famous-review.service';
import { FamousReviewController } from './famous-review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamousReview } from './entities/famous-review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FamousReview])],
  controllers: [FamousReviewController],
  providers: [FamousReviewService]
})
export class FamousReviewModule {}
