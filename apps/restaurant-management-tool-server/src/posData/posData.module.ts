import { Module } from "@nestjs/common";
import { PosDataModuleBase } from "./base/posData.module.base";
import { PosDataService } from "./posData.service";
import { PosDataController } from "./posData.controller";
import { PosDataResolver } from "./posData.resolver";

@Module({
  imports: [PosDataModuleBase],
  controllers: [PosDataController],
  providers: [PosDataService, PosDataResolver],
  exports: [PosDataService],
})
export class PosDataModule {}
