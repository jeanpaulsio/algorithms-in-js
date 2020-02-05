/**
 * CTCI 8.1: Triple Step
 *
 * A child is running up a staircase with n steps and can hop either 1 step,
 * 2 steps, or 3 steps at a time. Implement a method to count how many possible
 * ways the child can run up the stairs
 */

export function tripleStep(numStairs) {
  if (typeof numStairs !== "number") {
    throw new Error("Input must be a number.");
  }

  const table = new Array(numStairs + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < table.length; i++) {
    if (i + 1 < table.length) {
      table[i + 1] += table[i];
    }
    if (i + 2 < table.length) {
      table[i + 2] += table[i];
    }
    if (i + 3 < table.length) {
      table[i + 3] += table[i];
    }
  }

  return table[numStairs];
}
