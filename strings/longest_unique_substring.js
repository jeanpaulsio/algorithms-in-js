export const longestUniqueSubstring = (str) => {
  let start = 0;
  let end = 0;

  let maxLength = 1;
  let result = [0, 0];

  let map = { [str[end]]: 0 };

  while (end < str.length - 1) {
    end++;

    const charToProcess = str[end];

    // check to see if character to process is in
    // the already-processed substring of unique values
    if (charToProcess in map) {
      // move start pointer to character after last occurence
      start = map[charToProcess] + 1;
    }

    // put processed character in map
    map[charToProcess] = end;

    // update longest
    // end - start + 1 gets you the length of current substring
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      result[0] = start;
      result[1] = end;
    }
  }

  return str.slice(result[0], result[1] + 1);
};
