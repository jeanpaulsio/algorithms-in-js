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
  let longest = 1;
  let map = { [str[0]]: 0 };
  let result = [0, 0];

  while (end < str.length - 1) {
    // expand end pointer
    end++;

    let toAdd = str[end];

    if (toAdd in map && map[toAdd] >= start) {
      start = map[toAdd] + 1;
    }

    map[toAdd] = end;

    // update result
    if (end - start + 1 > longest) {
      longest = end - start + 1;
      result[0] = start;
      result[1] = end;
    }
  }

  // slice's second argument is exclusive
  return str.slice(result[0], result[1] + 1);
}
