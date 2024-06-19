import { PosDataWhereInput } from "./PosDataWhereInput";
import { PosDataOrderByInput } from "./PosDataOrderByInput";

export type PosDataFindManyArgs = {
  where?: PosDataWhereInput;
  orderBy?: Array<PosDataOrderByInput>;
  skip?: number;
  take?: number;
};
