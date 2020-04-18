import { subarraySumZero } from "@arrays/subarray_sum_zero";

describe("subarraySumZero", () => {
  test("postive and negative values", () => {
    const actual = subarraySumZero([10, 2, -2, -20, 10]);
    const expected = [1, 2];
    expect(actual).toEqual(expected);
  });

  test("no sums to zero", () => {
    const actual = subarraySumZero([10, 2, -1]);
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("zero is at first index", () => {
    const actual = subarraySumZero([0, 1, 2]);
    const expected = [0, 0];
    expect(actual).toEqual(expected);
  });

  test("subarray starts at index 0", () => {
    const actual = subarraySumZero([1, -1, 2]);
    const expected = [0, 1];
    expect(actual).toEqual(expected);
  });
});
