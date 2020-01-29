import { reverseWords } from "../reverse_words";

describe("reverseWords", () => {
  test("empty string", () => {
    const actual = () => reverseWords("");
    expect(actual).toThrowError("Input must contain words.");
  });

  test("single letter", () => {
    const actual = reverseWords("a");
    const expected = "a";
    expect(actual).toBe(expected);
  });

  test("begins with space", () => {
    const actual = reverseWords(" hello world");
    const expected = "world hello";
    expect(actual).toBe(expected);
  });

  test("ends with space", () => {
    const actual = reverseWords("hello world ");
    const expected = "world hello";
    expect(actual).toBe(expected);
  });

  test("single word", () => {
    const actual = reverseWords("hello");
    const expected = "hello";
    expect(actual).toBe(expected);
  });

  test("two words", () => {
    const actual = reverseWords("hello world");
    const expected = "world hello";
    expect(actual).toBe(expected);
  });

  test("three words", () => {
    const actual = reverseWords("hello there world");
    const expected = "world there hello";
    expect(actual).toBe(expected);
  });

  test("five words", () => {
    const actual = reverseWords("five four three two one");
    const expected = "one two three four five";
    expect(actual).toBe(expected);
  });
});
