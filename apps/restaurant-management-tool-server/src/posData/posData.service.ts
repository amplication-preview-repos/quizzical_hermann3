import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosDataServiceBase } from "./base/posData.service.base";

@Injectable()
export class PosDataService extends PosDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
