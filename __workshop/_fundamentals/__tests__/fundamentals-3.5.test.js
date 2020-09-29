// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex("bacon", 6)).toBe(undefined);
  expect(getLetterAtIndex(33, 2)).toBe(undefined);
  expect(getLetterAtIndex("", 2)).toBe(undefined);
  expect(getLetterAtIndex("", 0)).toBe(undefined);
  expect(getLetterAtIndex("kdjg3gg", 4)).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
