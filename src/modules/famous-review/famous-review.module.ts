import { Module } from '@nestjs/common';
import { FamousReviewService } from './famous-review.service';
import { FamousReviewController } from './famous-review.controller';

@Module({
  controllers: [FamousReviewController],
  providers: [FamousReviewService]
})
export class FamousReviewModule {}
