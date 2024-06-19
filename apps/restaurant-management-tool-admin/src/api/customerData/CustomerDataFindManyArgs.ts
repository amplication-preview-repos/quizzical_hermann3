import { CustomerDataWhereInput } from "./CustomerDataWhereInput";
import { CustomerDataOrderByInput } from "./CustomerDataOrderByInput";

export type CustomerDataFindManyArgs = {
  where?: CustomerDataWhereInput;
  orderBy?: Array<CustomerDataOrderByInput>;
  skip?: number;
  take?: number;
};
