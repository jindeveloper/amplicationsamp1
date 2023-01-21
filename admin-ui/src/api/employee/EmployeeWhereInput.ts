import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeWhereInput = {
  birthDate?: DateTimeNullableFilter;
  dateHired?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  middleName?: StringNullableFilter;
};
