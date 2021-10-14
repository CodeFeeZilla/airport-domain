class Passenger {
  constructor(name, passportNumber, seatNumber) {
    this.name = name;
    this.passportNumber = passportNumber;
    this.seatNumber = seatNumber;
    this.bags = [];

    if (!this.name) throw new Error("passenger must have a name");
    if (!this.passportNumber)
      throw new Error("passenger must have a passport number");
    if (!this.seatNumber) throw new Error("passenger must have a seat number");
    if (typeof this.name !== "string")
      throw new Error("passenger name must be a string");
    if (typeof this.passportNumber !== "string")
      throw new Error("passenger passport number must be a string");
    if (typeof this.seatNumber !== "string")
      throw new Error("passenger seat number must be a string");
  }

  addBag(bag) {
    if (!bag) throw new Error("addBag method must be called with an argument");

    this.bags.push(bag);
  }
}

module.exports = Passenger;
