/**
 * Given a sorted array of numbers, find the first occurrence of target x.
 * It's possible that the target does not repeat.
 *
 * Input: arr = [1, 2, 3, 3, 3, 4, 5, 6], x = 3
 * Output: 2
 * Explanation: Target x is found at index 2
 */

export function repeatingElement(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor(high - low / 2);

    if (arr[mid] < x) {
      low = mid + 1;
    } else if (arr[mid] > x || (arr[mid] === x && mid > 0 && arr[mid - 1] === x)) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
