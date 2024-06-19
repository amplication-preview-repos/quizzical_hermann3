import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerDataServiceBase } from "./base/customerData.service.base";

@Injectable()
export class CustomerDataService extends CustomerDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
