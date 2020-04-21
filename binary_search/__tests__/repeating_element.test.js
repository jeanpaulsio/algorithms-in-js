import { repeatingElement } from "@binary_search/repeating_element";

describe("repeatingElement", () => {
  test("target not in array", () => {
    const actual = repeatingElement([1], 0);
    const expected = -1;
    expect(actual).toBe(expected);
  });

  test("one item in array", () => {
    const actual = repeatingElement([1], 1);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  test("array of repeating integers", () => {
    const actual = repeatingElement([1, 1, 1, 1, 1, 1], 1);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  test("two items in array", () => {
    const actual = repeatingElement([1, 1], 1);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  test("repeated item start is left of mid", () => {
    const actual = repeatingElement([0, 1, 2, 2, 2, 3, 4], 2);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  test("repeated item start is at the mid", () => {
    const actual = repeatingElement([0, 1, 2, 2, 3], 2);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  test("example case", () => {
    const actual = repeatingElement([1, 2, 3, 3, 3, 4, 5, 6], 3);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
