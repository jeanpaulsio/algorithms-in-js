import { dutchNationalFlag } from "@arrays/dutch_national_flag";

describe("dutchNationalFlag", () => {
  test("sorts 0s, 1s, and 2s", () => {
    const actual = dutchNationalFlag([0, 1, 2, 0, 1, 2, 0, 1, 2]);
    const expected = [0, 0, 0, 1, 1, 1, 2, 2, 2];
    expect(actual).toEqual(expected);
  });

  test("already sorted", () => {
    const actual = dutchNationalFlag([0, 1, 2]);
    const expected = [0, 1, 2];
    expect(actual).toEqual(expected);
  });
});
