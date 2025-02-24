import { cloneEvenNumbers } from "./clone-even-numbers";

describe("cloneEvenNumbers", () => {
  test("empty array", () => {
    expect(cloneEvenNumbers([])).toEqual([]);
  });

  test("single odd number", () => {
    expect(cloneEvenNumbers([1])).toEqual([1]);
  });

  test("single even number", () => {
    expect(cloneEvenNumbers([2, -1])).toEqual([2, 2]);
  });

  test("all odd numbers", () => {
    expect(cloneEvenNumbers([1, 3, 5])).toEqual([1, 3, 5]);
  });

  test("all even numbers", () => {
    expect(cloneEvenNumbers([2, 4, 6, -1, -1, -1])).toEqual([2, 2, 4, 4, 6, 6]);
  });

  test("mixed numbers", () => {
    expect(cloneEvenNumbers([1, 2, 3, 4, 5, 6, -1, -1, -1])).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6]);
  });
});
