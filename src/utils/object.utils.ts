import { isEmpty } from "lodash";

export function hasEmptyField(obj) {
  return Object.values(obj).some((value) => isEmpty(value));
}
