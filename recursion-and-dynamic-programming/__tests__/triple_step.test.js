import { tripleStep } from "../triple_step";

describe("tripleStep", () => {
  test("null input", () => {
    const actual = () => tripleStep(null);
    expect(actual).toThrow("Input must be a number.");
  });

  test("1 step", () => {
    const actual = tripleStep(1);
    expect(actual).toBe(1);
  });

  test("2 steps", () => {
    const actual = tripleStep(2);
    expect(actual).toBe(2);
  });

  test("3 steps", () => {
    const actual = tripleStep(3);
    expect(actual).toBe(4);
  });

  test("4 steps", () => {
    const actual = tripleStep(4);
    expect(actual).toBe(7);
  });
});
