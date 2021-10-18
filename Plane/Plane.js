class Plane {
  constructor(type) {
    this.type = type;
    this.passengers = [];
    this.crewMembers = [];

    if (!this.type) throw new Error("plane must have a type");
    if (typeof this.type !== "string")
      throw new Error("plane type must be a string");
  }

  board(passenger) {
    this.passengers.push(passenger);
  }

  boardCrew(crewMember) {
    this.crewMembers.push(crewMember);
  }

  disimbarkPassengers() {
    this.passengers = [];
  }

  disembarkCrew() {
    this.crewMembers = [];
  }
}

module.exports = Plane;
