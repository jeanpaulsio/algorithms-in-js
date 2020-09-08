export const twoSum = (arr, x) => {
  const result = [-1, -1];

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const currentSum = arr[i] + arr[j];

    if (currentSum === x) {
      result[0] = i;
      result[1] = j;
      break;
    }

    if (currentSum > x) {
      j -= 1;
    } else if (currentSum < x) {
      i += 1;
    }
  }

  return result;
};
