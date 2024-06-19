import { InventoryDataWhereInput } from "./InventoryDataWhereInput";
import { InventoryDataOrderByInput } from "./InventoryDataOrderByInput";

export type InventoryDataFindManyArgs = {
  where?: InventoryDataWhereInput;
  orderBy?: Array<InventoryDataOrderByInput>;
  skip?: number;
  take?: number;
};
