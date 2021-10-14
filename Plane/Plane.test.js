const Plane = require("./Plane");

describe("Plane Class Unit Test", () => {
  it("should throw an error if plane does not have a type", () => {
    expect(() => new Plane()).toThrowError("plane must have a type");
  });

  it("should throw an error if plane type is not a string", () => {
    expect(() => new Plane(2)).toThrowError("plane type must be a string");
  });
});
