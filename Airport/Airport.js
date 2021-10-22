class Airport {
  static airports = [];

  constructor(name) {
    this.name = name;
    this.planes = [];

    this.constructor.airports.push(this);
    // if (!this.name) throw new Error("airport must have a name");
    // if (typeof this.name !== "string")
    //   throw new Error("airport name must be a string");
    this.throwError(!this.name, "airport must have a name");
    this.throwError(
      typeof this.name !== "string",
      "airport name must be a string"
    );
  }

  land(plane) {
    this.planes.push(plane);
  }

  depart(plane) {
    this.planes = this.planes.splice(this.planes.indexOf(plane));
  }

  throwError(condition, message) {
    if (condition) throw new Error(message);
  }
}

module.exports = Airport;
