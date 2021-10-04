import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {

  obj = {};
  let result = ""

  str.split('').map(function (item) {
    obj[item] = !obj[item] ? 1 : obj[item] + 1;
  });
  for (const key in obj) {
    if (obj[key] == 1) {
      obj[key] = "";
    }
    result += obj[key] + key
  }
  return result
}
