import { binarySearch } from "./binary-search";

describe("Binary Search", () => {
  test("finds element in sorted array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test("returns -1 when element not found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  test("works with empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
});
