const Person = require("./../Person/Person");

class CrewMember extends Person {
  constructor(name, position, staffNumber) {
    super(name);
    this.position = position;
    this.staffNumber = staffNumber;

    this.throwError(!this.name, "crew member must have a name");
    this.throwError(!this.position, "crew member must have a position");
    this.throwError(!this.staffNumber, "crew member must have a staff number");
    this.throwError(
      typeof this.name !== "string",
      "crew member name must be a string"
    );
    this.throwError(
      typeof this.position !== "string",
      "crew member position must be a string"
    );
    this.throwError(
      typeof this.staffNumber !== "number",
      "crew member staff number must be a number"
    );
  }
}

module.exports = CrewMember;
