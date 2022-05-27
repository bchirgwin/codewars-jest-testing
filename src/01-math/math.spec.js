const { add, divide, multiply, subtract } = require("./math"); // Load code under test

describe("Math", () => {
  // create tests
  test("add 1 + 2 = 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("subtract 4 - 1 = 3", () => {
    expect(subtract(1, 4)).toBe(3);
  });

  test("multiply 3 * 4 = 12", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("divide 9 / 3 = 3", () => {
    expect(divide(3, 9)).toBe(3);
  });
});

describe("data driven test add", () => {
  test.each([
      [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3]
  ])(
    ".add(%s, %s)",
    (a, b, expected) => {
      expect(a + b).toBe(expected);
    }
  );
});
