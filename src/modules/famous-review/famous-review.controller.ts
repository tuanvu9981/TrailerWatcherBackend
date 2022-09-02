import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FamousReviewService } from './famous-review.service';
import { CreateFamousReviewDto } from './dto/create-famous-review.dto';
import { UpdateFamousReviewDto } from './dto/update-famous-review.dto';

@Controller('famous-review')
export class FamousReviewController {
  constructor(private readonly famousReviewService: FamousReviewService) {}

  @Post()
  create(@Body() createFamousReviewDto: CreateFamousReviewDto) {
    return this.famousReviewService.create(createFamousReviewDto);
  }

  @Get()
  findAll() {
    return this.famousReviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.famousReviewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFamousReviewDto: UpdateFamousReviewDto) {
    return this.famousReviewService.update(+id, updateFamousReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.famousReviewService.remove(+id);
  }
}
