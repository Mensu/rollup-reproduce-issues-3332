import { isNumber } from 'lodash-es';

function checkIsNumber(value) {
  return isNumber(value);
}

export { checkIsNumber as c };
