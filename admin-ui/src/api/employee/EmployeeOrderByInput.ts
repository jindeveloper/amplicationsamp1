import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  birthDate?: SortOrder;
  createdAt?: SortOrder;
  dateHired?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  middleName?: SortOrder;
  updatedAt?: SortOrder;
};
