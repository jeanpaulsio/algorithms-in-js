import { reverseWords } from "./reverse-words";

describe("reverseWords", () => {
  test("empty string", () => {
    expect(reverseWords("")).toEqual("");
  });

  test("single letter", () => {
    expect(reverseWords("a")).toEqual("a");
  });

  test("single space", () => {
    expect(reverseWords(" ")).toEqual("");
  });

  test("begins with a space", () => {
    expect(reverseWords(" foo")).toEqual("foo");
  });

  test("ends with a space", () => {
    expect(reverseWords("foo ")).toEqual("foo");
  });

  test("one word", () => {
    expect(reverseWords("foo")).toEqual("foo");
  });

  test("two words", () => {
    expect(reverseWords("foo bar")).toEqual("bar foo");
  });

  test("more than two words", () => {
    expect(reverseWords("foo bar baz quux")).toEqual("quux baz bar foo");
  });
});
