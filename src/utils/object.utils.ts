import { isEmpty, isObject } from "lodash";

export function hasEmptyField(obj) {
  return isObject(obj)
    ? Object.values(obj).some((value) => isEmpty(value))
    : false;
}
