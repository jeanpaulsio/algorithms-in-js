/**
 * https://www.geeksforgeeks.org/find-subarray-with-given-sum-in-array-of-integers/?ref=rp
 *
 * Given an unsorted array of positive and negative integers,
 * find a subarray which adds to a 0.
 *
 * Input: [10, 2, -2, -20, 10]
 * Output: [1, 2]
 * Explanation: Sum of elements at indices 1 and 2 equal 0
 */

export function subarraySumZero(arr) {
  let map = {};
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      return [0, i];
    }

    if (sum in map) {
      return [map[sum] + 1, i];
    }

    map[sum] = i;
  }

  return null;
}
