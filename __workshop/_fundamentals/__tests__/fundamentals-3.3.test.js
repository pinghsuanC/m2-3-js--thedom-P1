// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(sum([3, 4])).toBe(7);
  // add more tests here...
  //testing sums
  expect(sum([100.1, 40.2])).toBe(140.3);
  //bad inputs
  expect(sum([3, 4, 5])).toBe(undefined);  //bad length
  expect(sum([3, "4"])).toBe(undefined);  //bad type
  expect(sum([3, "4", 5])).toBe(undefined);  //both 
});

// Run your test by typing yarn test fundamentals-3.3 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
