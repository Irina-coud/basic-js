import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (arr.length === 0) {
    return arr;
  }
  if (!(arr instanceof Array)) {
    throw new Error("Not implemented");
  }
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  if (!arr.includes(discardNext) &&
    !arr.includes(discardPrev) &&
    !arr.includes(doubleNext) &&
    !arr.includes(doublePrev)) {
    return arr;
  }


  let result = [];


  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    switch (element) {
      case discardNext:
        break;
      case discardPrev:
        if (result.length && arr[i - 2] !== discardNext) {
          result.pop();
        }
        break;
      case doubleNext:
        if (i !== arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case doublePrev:
        if (i !== 0 && arr[i - 2] !== discardNext) {
          result.push(arr[i - 1]);
        }
        break;
      default:
        if (arr[i - 1] !== discardNext) {
          result.push(element);
        }
        break;
    }
  }

  return result;
}
