import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ReleaseInfoDto } from './dto/create-release-info.dto';
import { ReleaseInfo } from './entities/release-info.entity';
import { ReleaseInfoService } from './release-info.service';

@Controller('release-info')
export class ReleaseInfoController {
  constructor(
    private readonly service: ReleaseInfoService
  ) { }

  @Post()
  async create(
    @Body()
    dto: ReleaseInfoDto
  ): Promise<ReleaseInfo> {
    return await this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<ReleaseInfo[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string
  ): Promise<ReleaseInfo> {
    return await this.service.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id')
    id: string,

    @Body()
    newDto: ReleaseInfoDto
  ): Promise<ReleaseInfo> {
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
