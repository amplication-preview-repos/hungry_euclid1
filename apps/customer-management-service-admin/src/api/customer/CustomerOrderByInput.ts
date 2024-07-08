import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  phone?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
};
