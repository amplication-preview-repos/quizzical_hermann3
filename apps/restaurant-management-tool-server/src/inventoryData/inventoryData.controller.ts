import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InventoryDataService } from "./inventoryData.service";
import { InventoryDataControllerBase } from "./base/inventoryData.controller.base";

@swagger.ApiTags("inventoryData")
@common.Controller("inventoryData")
export class InventoryDataController extends InventoryDataControllerBase {
  constructor(protected readonly service: InventoryDataService) {
    super(service);
  }
}
