import { Module } from "@nestjs/common";
import { InventoryDataModuleBase } from "./base/inventoryData.module.base";
import { InventoryDataService } from "./inventoryData.service";
import { InventoryDataController } from "./inventoryData.controller";
import { InventoryDataResolver } from "./inventoryData.resolver";

@Module({
  imports: [InventoryDataModuleBase],
  controllers: [InventoryDataController],
  providers: [InventoryDataService, InventoryDataResolver],
  exports: [InventoryDataService],
})
export class InventoryDataModule {}
