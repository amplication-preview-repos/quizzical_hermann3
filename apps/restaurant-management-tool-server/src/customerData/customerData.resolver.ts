import * as graphql from "@nestjs/graphql";
import { CustomerDataResolverBase } from "./base/customerData.resolver.base";
import { CustomerData } from "./base/CustomerData";
import { CustomerDataService } from "./customerData.service";

@graphql.Resolver(() => CustomerData)
export class CustomerDataResolver extends CustomerDataResolverBase {
  constructor(protected readonly service: CustomerDataService) {
    super(service);
  }
}
