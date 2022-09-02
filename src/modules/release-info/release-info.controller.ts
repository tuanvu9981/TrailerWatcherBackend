import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReleaseInfoService } from './release-info.service';
import { CreateReleaseInfoDto } from './dto/create-release-info.dto';
import { UpdateReleaseInfoDto } from './dto/update-release-info.dto';

@Controller('release-info')
export class ReleaseInfoController {
  constructor(private readonly releaseInfoService: ReleaseInfoService) {}

  @Post()
  create(@Body() createReleaseInfoDto: CreateReleaseInfoDto) {
    return this.releaseInfoService.create(createReleaseInfoDto);
  }

  @Get()
  findAll() {
    return this.releaseInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.releaseInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReleaseInfoDto: UpdateReleaseInfoDto) {
    return this.releaseInfoService.update(+id, updateReleaseInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.releaseInfoService.remove(+id);
  }
}
