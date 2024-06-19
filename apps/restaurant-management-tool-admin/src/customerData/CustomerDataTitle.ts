import { CustomerData as TCustomerData } from "../api/customerData/CustomerData";

export const CUSTOMERDATA_TITLE_FIELD = "id";

export const CustomerDataTitle = (record: TCustomerData): string => {
  return record.id?.toString() || String(record.id);
};
