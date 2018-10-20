import { SORT_BY } from "../constants/action-types";

export const sortBy = (sorter) => ({
  type: SORT_BY,
  sorter
});
