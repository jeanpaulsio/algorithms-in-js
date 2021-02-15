import { findTarget } from "@binary_search/find_target";

describe("findTarget", () => {
  test("regular case", () => {
    const actual = findTarget([3, 5, 6, 7, 8, 10], 8);
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  test("target at end", () => {
    const actual = findTarget([3, 5, 6, 7, 8, 10], 10);
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  test("target at start", () => {
    const actual = findTarget([3, 5, 6, 7, 8, 10], 3);
    const expected = 0;
    expect(actual).toEqual(expected);
  });

  test("target not found", () => {
    const actual = findTarget([3, 5, 6, 7, 8, 10], 0);
    const expected = -1;
    expect(actual).toEqual(expected);
  });
});
