import { Injectable } from '@nestjs/common';
import { CreateReleaseInfoDto } from './dto/create-release-info.dto';
import { UpdateReleaseInfoDto } from './dto/update-release-info.dto';

@Injectable()
export class ReleaseInfoService {
  create(createReleaseInfoDto: CreateReleaseInfoDto) {
    return 'This action adds a new releaseInfo';
  }

  findAll() {
    return `This action returns all releaseInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} releaseInfo`;
  }

  update(id: number, updateReleaseInfoDto: UpdateReleaseInfoDto) {
    return `This action updates a #${id} releaseInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} releaseInfo`;
  }
}
