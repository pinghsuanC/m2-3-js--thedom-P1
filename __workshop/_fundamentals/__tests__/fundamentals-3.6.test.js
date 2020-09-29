// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
  expect(calculator(["add", 10, 15, 7])).toBe(undefined);   // bad length
  expect(calculator(["qqq", 10, 15])).toBe(undefined);   // bad operation
  expect(calculator(["add", "10", 15])).toBe(undefined);   // bad numbers
  expect(calculator(["mul", 10, 15.5])).toBe(155);   // floats
  expect(calculator(["div", 10, 15])).toBe(0);   // division result in 0
  expect(calculator(["div", 15, 0])).toBe(undefined);   // 0 division
  expect(calculator(["div", -15, 4])).toBe(-3);   // negative division
});

// More info on jest expect: https://jestjs.io/docs/en/expect
