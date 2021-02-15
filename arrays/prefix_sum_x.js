export const prefixSumX = (arr, target) => {
  let sum = 0;
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === target) {
      return [0, i];
    }

    if (sum - target in map) {
      return [map[sum - target] + 1, i];
    }

    map[sum] = i;
  }

  return null;
};
