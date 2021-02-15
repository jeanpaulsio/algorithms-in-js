import { longestUniqueSubstring } from "@strings/longest_unique_substring";

describe("longestUniqueSubstring", () => {
  test("single character", () => {
    const actual = longestUniqueSubstring("a");
    const expected = "a";
    expect(actual).toEqual(expected);
  });

  test("two unique character", () => {
    const actual = longestUniqueSubstring("ab");
    const expected = "ab";
    expect(actual).toEqual(expected);
  });

  test("two duplicate character", () => {
    const actual = longestUniqueSubstring("aa");
    const expected = "a";
    expect(actual).toEqual(expected);
  });

  test("three duplicate character", () => {
    const actual = longestUniqueSubstring("aaa");
    const expected = "a";
    expect(actual).toEqual(expected);
  });

  test("multiple characters with no dupes", () => {
    const actual = longestUniqueSubstring("abcdef");
    const expected = "abcdef";
    expect(actual).toEqual(expected);
  });

  test("multiple characters with dupes", () => {
    const actual = longestUniqueSubstring("aaaaabcdefaa");
    const expected = "abcdef";
    expect(actual).toEqual(expected);
  });
});
