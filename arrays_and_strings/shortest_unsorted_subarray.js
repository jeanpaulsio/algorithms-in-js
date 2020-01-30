/**
 * Given an array of integers, find the shortest subarray,
 * that if sorted, results in the entire array being sorted.
 *
 * Return the start and end indices of the subarray as a pair.
 *
 * Given: [1, 2, 3, 5, 4, 10, 9, 12]
 * Result: [3, 6] since if we sort [5, 4, 10, 9], the
 * entire array would be sorted
 */

export function shortestUnsortedSubarray(arr) {
  if (arr === null) {
    throw new Error();
  }

  let i = 0;
  let j = arr.length - 1;

  while (arr[i] <= arr.length - 1) {
    if (arr[i] > arr[i + 1]) {
      break;
    }
    i++;
  }

  while (arr[j] > 0) {
    if (arr[j] < arr[j - 1]) {
      break;
    }
    j--;
  }

  if (i === arr.length - 1 && j === -1) {
    // This means that the array is already sorted,
    // therefore the shortest unsorted subarray is an empty array
    // which we can represent as [-1, -1]
    return [-1, -1];
  }

  const min = Math.min(...arr.slice(i, j + 1));
  const max = Math.max(...arr.slice(i, j + 1));

  while (j < arr.length && max > arr[j + 1]) {
    j++;
  }

  while (i >= 0 && min < arr[i - 1]) {
    i--;
  }

  return [i, j];
}
