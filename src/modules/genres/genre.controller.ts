import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GenreDto } from './dto/genre.dto';
import { Genre } from './entities/genre.entity';
import { GenreService } from './genre.service';

@Controller('genres')
export class GenreController {
  constructor(
    private readonly service: GenreService
  ) { }

  @Post()
  async create(
    @Body()
    dto: GenreDto
  ): Promise<Genre> {
    return await this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<Genre[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string
  ): Promise<Genre> {
    return await this.service.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id')
    id: string,

    @Body()
    newDto: GenreDto
  ): Promise<Genre> {
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
