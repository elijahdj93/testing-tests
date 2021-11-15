const { returnTwo, greeting, add } = require("./functions");

test("should return 2", () => {
  expect(returnTwo()).toBe(2);
});

describe("greeting Tests", () => {
  test("should get a greeting Hello, James", () => {
    expect(greeting("James")).toEqual("Hello, James");
  });

  test("should get a greeting Hello, Jill", () => {
    expect(greeting("Jill")).toEqual("Hello, Jill");
  });
});

test("should get sum of 2 and 3", () => {
  expect(add(2, 3)).toEqual(5);
});
