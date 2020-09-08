import { twoSum } from "@arrays/two_sum";

describe("twoSum", () => {
  test("two elements without sum", () => {
    const actual = twoSum([1, 2], 10);
    const expected = [-1, -1];
    expect(actual).toEqual(expected);
  });

  test("two elements with sum", () => {
    const actual = twoSum([1, 2], 3);
    const expected = [0, 1];
    expect(actual).toEqual(expected);
  });

  test("three elements without sum", () => {
    const actual = twoSum([1, 2, 3], 10);
    const expected = [-1, -1];
    expect(actual).toEqual(expected);
  });

  test("three elements with sum", () => {
    const actual = twoSum([1, 2, 3], 4);
    const expected = [0, 2];
    expect(actual).toEqual(expected);
  });

  test("three elements with sum and dupes", () => {
    const actual = twoSum([1, 2, 2], 4);
    const expected = [1, 2];
    expect(actual).toEqual(expected);
  });

  test("five elements without sum", () => {
    const actual = twoSum([1, 2, 3, 4, 5], 39);
    const expected = [-1, -1];
    expect(actual).toEqual(expected);
  });

  test("five elements with sum", () => {
    const actual = twoSum([0, 2, 3, 4, 8], 5);
    const expected = [1, 2];
    expect(actual).toEqual(expected);
  });

  test("five elements with sum and dupes", () => {
    const actual = twoSum([0, 2, 2, 2, 8], 4);
    const expected = [1, 3];
    expect(actual).toEqual(expected);
  });
});
