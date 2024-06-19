import { InventoryData as TInventoryData } from "../api/inventoryData/InventoryData";

export const INVENTORYDATA_TITLE_FIELD = "id";

export const InventoryDataTitle = (record: TInventoryData): string => {
  return record.id?.toString() || String(record.id);
};
