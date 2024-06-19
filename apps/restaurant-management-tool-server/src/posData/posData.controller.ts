import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosDataService } from "./posData.service";
import { PosDataControllerBase } from "./base/posData.controller.base";

@swagger.ApiTags("posData")
@common.Controller("posData")
export class PosDataController extends PosDataControllerBase {
  constructor(protected readonly service: PosDataService) {
    super(service);
  }
}
