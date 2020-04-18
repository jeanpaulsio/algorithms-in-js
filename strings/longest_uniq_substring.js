/**
 * https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/
 *
 * Given a string, find the length of the longest substring
 * without repeating characters
 *
 * Input: "geeksforgeeks"
 * Output: "ksforge"
 */

export function longestUniqSubstring(str) {
  if (str === "") {
    throw new Error("Input must be at least 1 character.");
  }

  let start = 0;
  let end = 0;

  let maxLength = 1;
  let result = [0, 0];

  let map = { [str[end]]: 0 };

  while (end < str.length - 1) {
    end += 1;

    const charToProcess = str[end];

    // Check to see if character to process exists
    // in the already-processed substring of unique values
    if (charToProcess in map && map[charToProcess] >= start) {
      // Move the start pointer to the character after the last occurence
      // of the charToProcess
      start = map[charToProcess] + 1;
    }

    // Put processed character in the map
    map[charToProcess] = end;

    // Update longest
    // end - start + 1 gets you the length of the current substring
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      result[0] = start;
      result[1] = end;
    }
  }

  return str.slice(result[0], result[1] + 1);
}
