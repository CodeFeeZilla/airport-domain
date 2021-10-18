const {
  Passenger,
  Bag,
  CrewMember,
  Plane,
  Airport,
} = require("./AirportSystem");

const passenger1 = new Passenger("Bob", "123", "1");
const bag1 = new Bag(50);
const crewMember1 = new CrewMember("Sally", "Pilot", 1);
const crewMember2 = new CrewMember("Ali", "Co-Pilot", 2);
const plane1 = new Plane("Boeing 1263");
const airport1 = new Airport("Manchester Aiport");
const airport2 = new Airport("Heathrow Aiport");

describe("Aiport System Test", () => {
  beforeAll(() => {
    airport1.land(plane1);
    plane1.boardCrew(crewMember1);
    plane1.boardCrew(crewMember2);
    passenger1.addBag(bag1);
    plane1.board(passenger1);
    airport1.depart(plane1);
  });

  test.todo("Intergration");
});
