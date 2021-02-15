import { prefixSumZero } from "@arrays/prefix_sum_zero";

describe("prefixSumZero", () => {
  test("regular case has sum", () => {
    const actual = prefixSumZero([2, 4, -2, 1, -3, 5, -3]);
    const expected = [1, 4];
    expect(actual).toEqual(expected);
  });

  test("regular case has no sum", () => {
    const actual = prefixSumZero([2, 4, -2]);
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("sum at beginning", () => {
    const actual = prefixSumZero([2, -2, 4]);
    const expected = [0, 1];
    expect(actual).toEqual(expected);
  });

  test("sum at end", () => {
    const actual = prefixSumZero([4, 2, -2]);
    const expected = [1, 2];
    expect(actual).toEqual(expected);
  });

  test("single +ve", () => {
    const actual = prefixSumZero([2]);
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("single -ve", () => {
    const actual = prefixSumZero([-2]);
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("zero", () => {
    const actual = prefixSumZero([0]);
    const expected = [0, 0];
    expect(actual).toEqual(expected);
  });
});
