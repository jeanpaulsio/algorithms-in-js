import { dutchNationalFlag } from "@arrays/dutch_national_flag";

describe("dutchNationalFlag", () => {
  test("null input", () => {
    const actual = () => dutchNationalFlag(null);
    expect(actual).toThrow("Input must not be null.");
  });

  test("single element", () => {
    const actual = dutchNationalFlag([0]);
    expect(actual).toEqual([0]);
  });

  test("two unsorted elements", () => {
    const actual = dutchNationalFlag([1, 0]);
    expect(actual).toEqual([0, 1]);
  });

  test("three unsorted elements", () => {
    const actual = dutchNationalFlag([2, 0, 1]);
    expect(actual).toEqual([0, 1, 2]);
  });

  test("multiple unsorted elements", () => {
    const actual = dutchNationalFlag([0, 1, 2, 0, 1, 2]);
    expect(actual).toEqual([0, 0, 1, 1, 2, 2]);
  });
});
