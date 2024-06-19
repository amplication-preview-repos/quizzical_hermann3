import * as graphql from "@nestjs/graphql";
import { InventoryDataResolverBase } from "./base/inventoryData.resolver.base";
import { InventoryData } from "./base/InventoryData";
import { InventoryDataService } from "./inventoryData.service";

@graphql.Resolver(() => InventoryData)
export class InventoryDataResolver extends InventoryDataResolverBase {
  constructor(protected readonly service: InventoryDataService) {
    super(service);
  }
}
