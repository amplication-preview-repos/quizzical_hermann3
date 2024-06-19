import * as graphql from "@nestjs/graphql";
import { PosDataResolverBase } from "./base/posData.resolver.base";
import { PosData } from "./base/PosData";
import { PosDataService } from "./posData.service";

@graphql.Resolver(() => PosData)
export class PosDataResolver extends PosDataResolverBase {
  constructor(protected readonly service: PosDataService) {
    super(service);
  }
}
