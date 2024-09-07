import { isObject } from 'lodash';

export function hasEmptyField(obj) {
  return isObject(obj) ? !Object.values(obj).every((value) => Boolean(value)) : true;
}
