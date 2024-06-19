import { Module } from "@nestjs/common";
import { CustomerDataModuleBase } from "./base/customerData.module.base";
import { CustomerDataService } from "./customerData.service";
import { CustomerDataController } from "./customerData.controller";
import { CustomerDataResolver } from "./customerData.resolver";

@Module({
  imports: [CustomerDataModuleBase],
  controllers: [CustomerDataController],
  providers: [CustomerDataService, CustomerDataResolver],
  exports: [CustomerDataService],
})
export class CustomerDataModule {}
