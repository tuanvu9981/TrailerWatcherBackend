import { Module } from '@nestjs/common';
import { ReleaseInfoService } from './release-info.service';
import { ReleaseInfoController } from './release-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReleaseInfo } from './entities/release-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReleaseInfo])],
  controllers: [ReleaseInfoController],
  providers: [ReleaseInfoService]
})
export class ReleaseInfoModule {}
