import { binarySearch } from "@binary_search/basic";

describe("binarySearch", () => {
  test("empty array", () => {
    const actual = () => binarySearch([], 1);
    expect(actual).toThrowError("Input array must contain at least 1 value");
  });

  test("item not in array", () => {
    const actual = binarySearch([1, 2, 3], 4);
    const expected = -1;
    expect(actual).toBe(expected);
  });

  test("one item in input array", () => {
    const actual = binarySearch([1], 1);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  test("two items in input array", () => {
    const actual = binarySearch([1, 2], 2);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  test("three items in input array", () => {
    const actual = binarySearch([1, 2, 3], 2);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  test("three+ odd number of items in input array", () => {
    const actual = binarySearch([1, 2, 3, 4, 5, 6, 7], 4);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  test("three+ even number of items in input array", () => {
    const actual = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4);
    const expected = 3;
    expect(actual).toBe(expected);
  });
});
