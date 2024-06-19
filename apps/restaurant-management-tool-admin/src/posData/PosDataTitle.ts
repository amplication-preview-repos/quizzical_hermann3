import { PosData as TPosData } from "../api/posData/PosData";

export const POSDATA_TITLE_FIELD = "id";

export const PosDataTitle = (record: TPosData): string => {
  return record.id?.toString() || String(record.id);
};
