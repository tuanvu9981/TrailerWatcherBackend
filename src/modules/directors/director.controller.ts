import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorDto } from './dto/director.dto';
import { Director } from './entities/director.entity';

@Controller('directors')
export class DirectorController {
  constructor(
    private readonly service: DirectorService
  ) { }

  @Post()
  async create(
    @Body()
    dto: DirectorDto
  ): Promise<Director> {
    return await this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<Director[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string
  ): Promise<Director> {
    return this.service.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id')
    id: string,

    @Body()
    newDto: DirectorDto
  ): Promise<Director> {
    return this.service.update(+id, newDto);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string
  ) {
    return this.service.remove(+id);
  }
}
