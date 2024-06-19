import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerDataService } from "./customerData.service";
import { CustomerDataControllerBase } from "./base/customerData.controller.base";

@swagger.ApiTags("customerData")
@common.Controller("customerData")
export class CustomerDataController extends CustomerDataControllerBase {
  constructor(protected readonly service: CustomerDataService) {
    super(service);
  }
}
