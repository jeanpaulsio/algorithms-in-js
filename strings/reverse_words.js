/**
 * Given a sentence, reverse the words. Assume there is
 * no punctuation. You can maintain casing of the letters.
 *
 * e.g. "hello world" => "world hello"
 */

export function reverseWords(sentence) {
  if (sentence === "" || sentence === " ") {
    throw new Error("Input must contain words.");
  }

  let result = "";
  let wordEnd = sentence.length;
  let i = sentence.length;

  while (i >= 0) {
    if (sentence[i] === " ") {
      if (result !== "") {
        result += " ";
      }
      result += sentence.slice(i + 1, wordEnd);
      wordEnd = i;
    }

    i--;
  }

  const lastWord = sentence.slice(0, wordEnd);

  if (result !== "" && lastWord !== "") {
    result += " ";
  }
  result += lastWord;

  return result;
}
