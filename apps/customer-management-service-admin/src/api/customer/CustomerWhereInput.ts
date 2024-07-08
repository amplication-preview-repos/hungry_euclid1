import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  phone?: StringNullableFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
};
