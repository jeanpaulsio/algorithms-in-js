import { cloneEvenNumbers, lastNonNegativeIndex } from "../clone_even_numbers";

describe("cloneEvenNumbers", () => {
  test("null input", () => {
    const actual = () => cloneEvenNumbers(null);
    expect(actual).toThrowError(TypeError);
  });

  test("empty array", () => {
    const actual = () => cloneEvenNumbers([]);
    expect(actual).toThrowError(TypeError);
  });

  test("all blank spaces", () => {
    const actual = () => cloneEvenNumbers([-1, -1]);
    expect(actual).toThrowError("Array must have positive numbers.");
  });

  test("single even number", () => {
    const actual = cloneEvenNumbers([2, -1]);
    const expected = [2, 2];
    expect(actual).toEqual(expected);
  });

  test("single odd number", () => {
    const actual = cloneEvenNumbers([1]);
    const expected = [1];
    expect(actual).toEqual(expected);
  });

  test("all even numbers", () => {
    const actual = cloneEvenNumbers([2, 2, 2, 2, -1, -1, -1, -1]);
    const expected = [2, 2, 2, 2, 2, 2, 2, 2];
    expect(actual).toEqual(expected);
  });

  test("all odd numbers", () => {
    const actual = cloneEvenNumbers([1, 3, 5, 7, 9]);
    const expected = [1, 3, 5, 7, 9];
    expect(actual).toEqual(expected);
  });

  test("mix of even and odd numbers", () => {
    const actual = cloneEvenNumbers([1, 2, 3, 4, 5, -1, -1]);
    const expected = [1, 2, 2, 3, 4, 4, 5];
    expect(actual).toEqual(expected);
  });
});

describe("lastNonNegativeIndex", () => {
  test("with empty spaces", () => {
    const actual = lastNonNegativeIndex([1, 2, 3, 4, -1, -1]);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  test("no empty spaces", () => {
    const actual = lastNonNegativeIndex([1, 3]);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  test("all empty spaces", () => {
    const actual = lastNonNegativeIndex([-1, -1, -1, -1]);
    const expected = -1;
    expect(actual).toBe(expected);
  });
});
