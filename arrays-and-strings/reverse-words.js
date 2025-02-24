export function reverseWords(str) {
  let result = "";
  let i = str.length - 1;
  let j = str.length;

  while (i >= 0) {
    if (str[i] === " ") {
      const word = str.slice(i + 1, j);

      if (word.length > 0) {
        result += word;
      }

      if (result.length > 0 && i > 0) {
        result += " ";
      }

      j = i;
    }

    i--;
  }

  const lastWord = str.slice(i + 1, j);

  if (lastWord.length != " ") {
    result += lastWord;
  }

  return result;
}
