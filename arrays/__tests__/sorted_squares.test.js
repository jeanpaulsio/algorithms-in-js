import { sortedSquares } from "@arrays/sorted_squares";

describe("sortedSquares", () => {
  test("single negative element", () => {
    const actual = sortedSquares([-2]);
    const expected = [4];
    expect(actual).toEqual(expected);
  });

  test("single positive element", () => {
    const actual = sortedSquares([2]);
    const expected = [4];
    expect(actual).toEqual(expected);
  });

  test("two positive elements", () => {
    const actual = sortedSquares([2, 3]);
    const expected = [4, 9];
    expect(actual).toEqual(expected);
  });

  test("multiple positive elements", () => {
    const actual = sortedSquares([1, 2, 3, 4, 5]);
    const expected = [1, 4, 9, 16, 25];
    expect(actual).toEqual(expected);
  });

  test("multiple negative elements", () => {
    const actual = sortedSquares([-5, -4, -3, -2, -1]);
    const expected = [1, 4, 9, 16, 25];
    expect(actual).toEqual(expected);
  });

  test("multiple positive and negative elements", () => {
    const actual = sortedSquares([-6, -4, -2, 0, 1, 3, 5]);
    const expected = [0, 1, 4, 9, 16, 25, 36];
    expect(actual).toEqual(expected);
  });
});
