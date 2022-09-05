import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FamousReviewDto } from './dto/famous-review.dto';
import { FamousReview } from './entities/famous-review.entity';
import { FamousReviewService } from './famous-review.service';

@Controller('famous-review')
export class FamousReviewController {
  constructor(
    private readonly service: FamousReviewService
  ) { }

  @Post()
  async create(
    @Body()
    dto: FamousReviewDto
  ): Promise<FamousReview> {
    return await this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<FamousReview[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string
  ): Promise<FamousReview> {
    return await this.service.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id')
    id: string,

    @Body()
    newDto: FamousReviewDto
  ): Promise<FamousReview> {
    await this.service.update(+id, newDto);
    return await this.service.findOne(+id);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string
  ) {
    return await this.service.remove(+id);
  }
}
