export const shortestUnsortedSubarray = (arr) => {
  if (arr === null) {
    throw new Error();
  }

  const result = [-1, -1];

  let i = 0;
  let j = arr.length - 1;

  // Find dip
  while (i < arr.length - 1) {
    if (arr[i] > arr[i + 1]) {
      break;
    }
    i += 1;
  }

  // Find bump
  while (j > 0) {
    if (arr[j] < arr[j - 1]) {
      break;
    }
    j -= 1;
  }

  // Return early if the array is already sorted
  if (i === arr.length - 1 && j === 0) {
    return result;
  }

  let boundaryMin = arr[i];
  let boundaryMax = arr[i];

  // Find min and max elements within boundary
  for (let x = i; x <= j; x++) {
    if (arr[x] < boundaryMin) {
      boundaryMin = arr[x];
    } else if (arr[x] > boundaryMax) {
      boundaryMax = arr[x];
    }
  }

  // Expand i to the left until min is gte element directly to the left of boundary
  while (boundaryMin < arr[i - 1] && i >= 0) {
    i -= 1;
  }

  // Expand j to the right until max is lte element directly to the right of boundary
  while (boundaryMax > arr[j + 1] && j <= arr.length - 1) {
    j += 1;
  }

  result[0] = i;
  result[1] = j;

  return result;
};
