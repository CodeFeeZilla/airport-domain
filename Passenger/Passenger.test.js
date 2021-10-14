const { TestWatcher } = require("@jest/core");
const Passenger = require("./Passenger");

describe("Passenger Class Unit Test", () => {
  it("should should throw an error if the passenger has no name", () => {
    expect(() => new Passenger()).toThrowError("passenger must have a name");
  });

  it("should should throw an error if the passenger has no passport number", () => {
    expect(() => new Passenger("bob")).toThrowError(
      "passenger must have a passport number"
    );
  });

  it("should should throw an error if the passenger has no seat number", () => {
    expect(() => new Passenger("bob", "123")).toThrowError(
      "passenger must have a seat number"
    );
  });

  it("should throw an error if name is not a string", () => {
    expect(() => new Passenger(123, "123", "1")).toThrowError(
      "passenger name must be a string"
    );
  });

  it("should throw an error if passport number is not a string", () => {
    expect(() => new Passenger("bob", 123, "1")).toThrowError(
      "passenger passport number must be a string"
    );
  });

  it("should throw an error if seat number is not a string", () => {
    expect(() => new Passenger("bob", "123", 1)).toThrowError(
      "passenger seat number must be a string"
    );
  });

  it("should throw an error if it's addBag method is called without an argument", () => {
    expect(() => new Passenger("bob", "123", "1").addBag()).toThrowError(
      "addBag method must be called with an argument"
    );
  });
});
