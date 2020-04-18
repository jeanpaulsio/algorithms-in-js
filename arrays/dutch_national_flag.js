/**
 * https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/
 *
 * Given an array A[] consisting 0s, 1s and 2s. The task is to write a
 * function that sorts the given array. The functions should put all 0s first,
 * then all 1s and all 2s in last.
 *
 * Input: [0, 1, 2, 0, 1, 2]
 * Output: [0, 0, 1, 1, 2, 2]
 */

export function dutchNationalFlag(arr) {
  if (arr === null) {
    throw new Error("Input must not be null.");
  }

  let low = -1;
  let mid = -1;
  let high = arr.length;

  while (mid + 1 < high) {
    if (arr[mid + 1] === 2) {
      swap(arr, high - 1, mid + 1);
      high--;
    } else if (arr[mid + 1] === 1) {
      mid++;
    } else if (arr[mid + 1] === 0) {
      swap(arr, low + 1, mid + 1);
      low++;
      mid++;
    }
  }

  return arr;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
