class Plane {
  constructor(type) {
    this.type = type;
    this.passengers = [];

    if (!this.type) throw new Error("plane must have a type");
    if (typeof this.type !== "string")
      throw new Error("plane type must be a string");
  }

  board(passenger) {
    this.passengers.push(passenger);
  }
}

module.exports = Plane;
