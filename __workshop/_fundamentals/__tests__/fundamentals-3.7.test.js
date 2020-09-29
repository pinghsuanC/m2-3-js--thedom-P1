// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  // add more tests here...
  expect(repeat(["foo", 3, 3])).toBe(undefined);   // length
  expect(repeat([1, 3])).toBe(undefined);   // type of 1st
  expect(repeat(["foo", "3"])).toBe(undefined);   // type of 2nd
  expect(repeat(["foo", 3.5])).toBe(undefined);   // float
  expect(repeat(["foo", 0])).toBe("");   // 0
  expect(repeat(["foo", -1])).toBe("");   // negative
  expect(repeat(["Mkk", 3])).toBe("MkkMkkMkk");   // other case
});

// More info on jest expect: https://jestjs.io/docs/en/expect
