/**
 * https://www.geeksforgeeks.org/binary-search/
 *
 * Given a sorted array of n elements, write a function to search
 * a given element x in arr[].
 *
 * Given: arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], x = 23
 * Result: 5
 * Explanation: 23 is found at index 5
 */

export function binarySearch(arr, x) {
  if (arr.length === 0) {
    throw new Error("Input array must contain at least 1 value.");
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
