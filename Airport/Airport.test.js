const Airport = require("./Airport");

describe("Airport Class Unit Test", () => {
  it("should throw an error if airport does not have a name", () => {
    expect(() => new Airport()).toThrowError("airport must have a name");
  });

  it("should throw an error if airport name is not a string", () => {
    expect(() => new Airport(12)).toThrowError("airport name must be a string");
  });
});
