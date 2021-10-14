const Bag = require("./Bag");

describe("Bag class Unit Test", () => {
  it("should throw an error if bag instance has no weight", () => {
    expect(() => new Bag()).toThrowError("bag must have a weight");
  });

  it("should throw an error type of weight is not a number", () => {
    expect(() => new Bag("12")).toThrowError("weight of bag must be a number");
  });

  test("it's isOverLimit method should return a boolean", () => {
    expect(typeof new Bag(12).isOverLimit()).toBe("boolean");
  });
});
