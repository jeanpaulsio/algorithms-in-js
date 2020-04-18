import { longestUniqSubstring } from "@strings/longest_uniq_substring";

describe("longestUniqSubstring", () => {
  test("empty string", () => {
    const actual = () => longestUniqSubstring("");
    expect(actual).toThrowError("Input must be at least 1 character.");
  });

  test("single character", () => {
    const actual = longestUniqSubstring("a");
    const expected = "a";
    expect(actual).toBe(expected);
  });

  test("string with repeating characters", () => {
    const actual = longestUniqSubstring("aaa");
    const expected = "a";
    expect(actual).toBe(expected);
  });

  test("string with only unique characters", () => {
    const actual = longestUniqSubstring("abcdef");
    const expected = "abcdef";
    expect(actual).toBe(expected);
  });

  test("string with unique substring in middle", () => {
    const actual = longestUniqSubstring("geeksforgeeks");
    const expected = "eksforg";
    expect(actual).toBe(expected);
  });
});
