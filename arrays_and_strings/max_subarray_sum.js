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

  let maxSum = 0;
  let maxHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxHere = Math.max(0, maxHere + arr[i]);
    maxSum = Math.max(maxHere, maxSum);
  }

  return maxSum;
}
