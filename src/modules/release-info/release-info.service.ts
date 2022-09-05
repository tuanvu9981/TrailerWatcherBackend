import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/interface/base.service';
import { Repository } from 'typeorm';
import { ReleaseInfo } from './entities/release-info.entity';

@Injectable()
export class ReleaseInfoService extends BaseService<ReleaseInfo>{

  constructor(
    @InjectRepository(ReleaseInfo)
    protected repository: Repository<ReleaseInfo>
  ){
    super();
    this.repository = repository;
  }
  
  async findOne(id: number): Promise<ReleaseInfo> {
    return await this.repository.findOneBy({ id });
  }
}
