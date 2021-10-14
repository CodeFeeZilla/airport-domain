class Airport {
  constructor(name) {
    this.name = name;

    if (!this.name) throw new Error("airport must have a name");
    if (typeof this.name !== "string")
      throw new Error("airport name must be a string");
  }
}

module.exports = Airport;
