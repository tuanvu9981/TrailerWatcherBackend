import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TrailerDto } from './dto/trailer.dto';
import { Trailer } from './entities/trailer.entity';
import { TrailerService } from './trailer.service';

@Controller('trailers')
export class TrailerController {
  constructor(
    private readonly service: TrailerService
  ) { }

  @Post()
  async create(
    @Body()
    dto: TrailerDto
  ): Promise<Trailer> {
    return await this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<Trailer[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string
  ): Promise<Trailer> {
    return await this.service.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id')
    id: string,

    @Body()
    newDto: TrailerDto
  ): Promise<Trailer> {
    await this.service.update(+id, newDto);
    return await this.service.findOne(+id);
  }

  @Delete(':id')
  async remove(
    @Param('id')
    id: string
  ): Promise<void> {
    return await this.service.remove(+id);
  }
}
