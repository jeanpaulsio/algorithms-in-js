export const prefixSumZero = (arr) => {
  let sum = 0;
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      return [0, i];
    }

    if (sum in hash) {
      return [hash[sum] + 1, i];
    }

    hash[sum] = i;
  }

  return null;
};
