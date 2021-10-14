const CrewMember = require("./CrewMember");

describe("CrewMember Class Unit Test", () => {
  it("should should throw an error if the crew member has no name", () => {
    expect(() => new CrewMember()).toThrowError("crew member must have a name");
  });

  it("should should throw an error if the crew member has no position", () => {
    expect(() => new CrewMember("bob")).toThrowError(
      "crew member must have a position"
    );
  });

  it("should should throw an error if the crew member has no staff number", () => {
    expect(() => new CrewMember("bob", "123")).toThrowError(
      "crew member must have a staff number"
    );
  });

  it("should throw an error if crew member name is not a string", () => {
    expect(() => new CrewMember(123, "123", "1")).toThrowError(
      "crew member name must be a string"
    );
  });

  it("should throw an error if crew member position is not a string", () => {
    expect(() => new CrewMember("bob", 123, "1")).toThrowError(
      "crew member position must be a string"
    );
  });

  it("should throw an error if crew member staff number is not a number", () => {
    expect(() => new CrewMember("bob", "123", "1")).toThrowError(
      "crew member staff number must be a number"
    );
  });
});
