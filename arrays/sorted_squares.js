const square = (n) => Math.pow(n, 2);
const abs = (n) => Math.abs(n);

export const sortedSquares = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  const result = new Array(arr.length);
  let resultPointer = result.length - 1;

  while (i <= j) {
    if (abs(arr[i]) > abs(arr[j])) {
      result[resultPointer] = square(arr[i]);
      i += 1;
    } else {
      result[resultPointer] = square(arr[j]);
      j -= 1;
    }

    resultPointer -= 1;
  }

  return result;
};
