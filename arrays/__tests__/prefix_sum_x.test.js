import { prefixSumX } from "@arrays/prefix_sum_x";

describe("prefixSumX", () => {
  test("single +ve", () => {
    const actual = prefixSumX([1], 1);
    const expected = [0, 0];
    expect(actual).toEqual(expected);
  });

  test("single -ve", () => {
    const actual = prefixSumX([-1], -1);
    const expected = [0, 0];
    expect(actual).toEqual(expected);
  });

  test("zero", () => {
    const actual = prefixSumX([0], 0);
    const expected = [0, 0];
    expect(actual).toEqual(expected);
  });

  test("doesn't find target", () => {
    const actual = prefixSumX([-1, 1, 2, 3, -3], 10000);
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("finds target in beginning", () => {
    const actual = prefixSumX([1, -2, 3, 4, 5], 2);
    const expected = [0, 2];
    expect(actual).toEqual(expected);
  });

  test("finds target in end", () => {
    const actual = prefixSumX([1, -2, 3, 4, 5], 12);
    const expected = [2, 4];
    expect(actual).toEqual(expected);
  });

  test("finds target in middle", () => {
    const actual = prefixSumX([1, -2, 3, 4, 5], 7);
    const expected = [2, 3];
    expect(actual).toEqual(expected);
  });
});
