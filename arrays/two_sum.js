/**
 * Given an array of sorted integers, find two numbers in
 * the array that sum to x
 *
 * Given: arr = [1, 3, 5, 8], x = 8
 * Result: [1, 2] since a[1] + a[2] = 8
 */

export function twoSum(arr, x) {
  if (arr === null || x === null) {
    throw new Error("Input must not be null.");
  }

  if (arr.length < 2) {
    throw new Error("Array must have at least 2 items.");
  }

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const sum = arr[i] + arr[j];

    if (sum < x) {
      i++;
    } else if (sum > x) {
      j--;
    } else if (sum === x) {
      return [i, j];
    }
  }

  return [-1, -1];
}
