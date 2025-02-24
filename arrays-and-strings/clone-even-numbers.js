export function cloneEvenNumbers(arr) {
  if (arr.length === 0) {
    return arr;
  }

  let i = findLastNumber(arr);
  let j = arr.length - 1;

  while (i >= 0) {
    if (arr[i] % 2 === 0) {
      arr[j] = arr[i];
      j--;
    }

    arr[j] = arr[i];
    j--;
    i--;
  }

  return arr;
}

function findLastNumber(arr) {
  let pointer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      pointer = i;
    } else {
      break;
    }
  }

  return pointer;
}
