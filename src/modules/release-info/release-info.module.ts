import { Module } from '@nestjs/common';
import { ReleaseInfoService } from './release-info.service';
import { ReleaseInfoController } from './release-info.controller';

@Module({
  controllers: [ReleaseInfoController],
  providers: [ReleaseInfoService]
})
export class ReleaseInfoModule {}
