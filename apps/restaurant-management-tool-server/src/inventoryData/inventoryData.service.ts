import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InventoryDataServiceBase } from "./base/inventoryData.service.base";

@Injectable()
export class InventoryDataService extends InventoryDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
