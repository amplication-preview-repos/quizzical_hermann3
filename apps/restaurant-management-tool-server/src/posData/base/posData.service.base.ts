/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PosData as PrismaPosData } from "@prisma/client";

export class PosDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PosDataCountArgs, "select">): Promise<number> {
    return this.prisma.posData.count(args);
  }

  async posDataItems(
    args: Prisma.PosDataFindManyArgs
  ): Promise<PrismaPosData[]> {
    return this.prisma.posData.findMany(args);
  }
  async posData(
    args: Prisma.PosDataFindUniqueArgs
  ): Promise<PrismaPosData | null> {
    return this.prisma.posData.findUnique(args);
  }
  async createPosData(args: Prisma.PosDataCreateArgs): Promise<PrismaPosData> {
    return this.prisma.posData.create(args);
  }
  async updatePosData(args: Prisma.PosDataUpdateArgs): Promise<PrismaPosData> {
    return this.prisma.posData.update(args);
  }
  async deletePosData(args: Prisma.PosDataDeleteArgs): Promise<PrismaPosData> {
    return this.prisma.posData.delete(args);
  }
}