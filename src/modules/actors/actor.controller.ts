import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorDto } from './dto/actor.dto';
import { Actor } from './entities/actor.entity';

@Controller('actors')
export class ActorController {
  constructor(
    private readonly service: ActorService
  ) { }

  @Post()
  async create(
    @Body()
    dto: ActorDto
  ): Promise<Actor> {
    return await this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<Actor[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string
  ): Promise<Actor> {
    return this.service.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id')
    id: string,

    @Body()
    newDto: ActorDto
  ): Promise<Actor> {
    return this.service.update(+id, newDto);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string
  ) {
    return this.service.remove(+id);
  }
}
