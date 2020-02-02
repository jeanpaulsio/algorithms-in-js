import { maxSubarraySum } from "../max_subarray_sum";

describe("maxSubarraySum", () => {
  test("empty array", () => {
    const actual = () => maxSubarraySum([]);
    expect(actual).toThrow("Input array must not be empty.");
  });

  test("single positive element", () => {
    const actual = maxSubarraySum([1]);
    expect(actual).toBe(1);
  });

  test("single negative element", () => {
    const actual = maxSubarraySum([-1]);
    expect(actual).toBe(0);
  });

  test("single element is 0", () => {
    const actual = maxSubarraySum([0]);
    expect(actual).toBe(0);
  });

  test("two elements", () => {
    const actual = maxSubarraySum([1, 2]);
    expect(actual).toBe(3);
  });

  test("all positive elements", () => {
    const actual = maxSubarraySum([1, 2, 3, 4, 5]);
    expect(actual).toBe(15);
  });

  test("all negative elements", () => {
    const actual = maxSubarraySum([-1, -2, -3, -4, -5]);
    expect(actual).toBe(0);
  });

  test("all elements are 0", () => {
    const actual = maxSubarraySum([0, 0, 0, 0, 0, 0]);
    expect(actual).toBe(0);
  });

  test("mix of positive and negative elements", () => {
    const actual = maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3]);
    expect(actual).toBe(7);
  });
});
