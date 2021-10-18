const Person = require("./../Person/Person");

class Passenger extends Person {
  constructor(name, passportNumber, seatNumber) {
    super(name);

    this.passportNumber = passportNumber;
    this.seatNumber = seatNumber;

    this.throwError(!this.name, "passenger must have a name");
    this.throwError(
      typeof this.name !== "string",
      "passenger name must be a string"
    );
    this.throwError(
      !this.passportNumber,
      "passenger must have a passport number"
    );
    this.throwError(!this.seatNumber, "passenger must have a seat number");
    this.throwError(
      typeof this.passportNumber !== "string",
      "passenger passport number must be a string"
    );
    this.throwError(
      typeof this.seatNumber !== "string",
      "passenger seat number must be a string"
    );
  }
}

module.exports = Passenger;
