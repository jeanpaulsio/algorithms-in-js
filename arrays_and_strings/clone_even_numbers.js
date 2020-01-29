/**
 * Given an array of numbers, replace each even number with two
 * of the same number. Assume that the array has the exact amount
 * of space to duplicate even numbers. Empty spaces are represented
 * as -1.
 *
 * e.g. [1, 2, 3, 4, 5, -1, -1] => [1, 2, 2, 3, 4, 4, 5]
 */
export function cloneEvenNumbers(arr) {
  if (arr === null || arr.length === 0) {
    throw new TypeError();
  }

  var i = arr.length - 1;
  var j = lastNonNegativeIndex(arr);

  if (j === -1) {
    throw new Error("Array must have positive numbers.");
  }

  while (j >= 0) {
    if (arr[j] % 2 === 0) {
      arr[i] = arr[j];
      i--;
    }
    arr[i] = arr[j];
    i--;
    j--;
  }

  return arr;
}

// Helper function
export function lastNonNegativeIndex(arr) {
  let pointer = arr.length - 1;
  while (pointer >= 0) {
    if (arr[pointer] > 0) {
      break;
    }
    pointer--;
  }
  return pointer;
}
