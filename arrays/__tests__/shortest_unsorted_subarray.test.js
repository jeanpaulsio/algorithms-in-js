import { shortestUnsortedSubarray } from "@arrays/shortest_unsorted_subarray";

describe("shortestUnsortedSubarray", () => {
  test("null input", () => {
    const actual = () => shortestUnsortedSubarray(null);
    expect(actual).toThrow();
  });

  test("one element", () => {
    const actual = shortestUnsortedSubarray([1]);
    const expected = [-1, -1];
    expect(actual).toEqual(expected);
  });

  test("two elements sorted", () => {
    const actual = shortestUnsortedSubarray([1, 2]);
    const expected = [-1, -1];
    expect(actual).toEqual(expected);
  });

  test("two elements unsorted", () => {
    const actual = shortestUnsortedSubarray([2, 1]);
    const expected = [0, 1];
    expect(actual).toEqual(expected);
  });

  test("elements already sorted", () => {
    const actual = shortestUnsortedSubarray([1, 2, 3, 4, 5, 6, 7]);
    const expected = [-1, -1];
    expect(actual).toEqual(expected);
  });

  test("elements unsorted at beginning", () => {
    const actual = shortestUnsortedSubarray([3, 2, 1, 5, 6, 7, 8, 9]);
    const expected = [0, 2];
    expect(actual).toEqual(expected);
  });

  test("elements unsorted at middle", () => {
    const actual = shortestUnsortedSubarray([2, 3, 5, 4, 9, 8, 7, 10, 11, 12]);
    const expected = [2, 6];
    expect(actual).toEqual(expected);
  });

  test("elements unsorted at end", () => {
    const actual = shortestUnsortedSubarray([1, 2, 3, 4, 5, 10, 9, 8]);
    const expected = [5, 7];
    expect(actual).toEqual(expected);
  });

  test("bump and dip require expansion", () => {
    const actual = shortestUnsortedSubarray([1, 3, 5, 7, 2, 6, 14, 13, 15]);
    const expected = [1, 7];
    expect(actual).toEqual(expected);
  });
});
