/**
 * https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 *
 * Write an efficient program to find the sum of contiguous subarray within
 * a one-dimensional array of numbers which has the largest sum.
 *
 * Input: [-2, -3, 4, -1, -2, 1, 5, -3]
 * Output: 7 - sum of subarray: [4, -1, -2, 1, 5]
 */

export function maxSubarraySum(arr) {
  if (arr.length === 0) {
    throw new Error("Input array must not be empty.");
  }

  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
  }

  return maxSoFar;
}
