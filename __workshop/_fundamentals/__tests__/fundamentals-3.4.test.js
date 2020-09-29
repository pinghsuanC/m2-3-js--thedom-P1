// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...
  expect(sum([3, 4, 5, 6, 7])).toBe(25);
  expect(sum([3.5, 4.1, 5])).toBe(12.6);
  expect(sum([3, 4, 5, "a"])).toBe(undefined);
  expect(sum([])).toBe(0);    // didn't specify in the question
});

// More info on jest expect: https://jestjs.io/docs/en/expect
