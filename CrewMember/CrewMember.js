class CrewMember {
  constructor(name, position, staffNumber) {
    this.name = name;
    this.position = position;
    this.staffNumber = staffNumber;

    if (!this.name) throw new Error("crew member must have a name");
    if (!this.position) throw new Error("crew member must have a position");
    if (!this.staffNumber)
      throw new Error("crew member must have a staff number");

    if (typeof this.name !== "string")
      throw new Error("crew member name must be a string");
    if (typeof this.position !== "string")
      throw new Error("crew member position must be a string");
    if (typeof this.staffNumber !== "number")
      throw new Error("crew member staff number must be a number");
  }
}

module.exports = CrewMember;
