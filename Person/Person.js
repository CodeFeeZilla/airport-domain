class Person {
  constructor(name) {
    this.name = name;
    this.bags = [];
  }

  addBag(bag) {
    if (!bag) throw new Error("addBag method must be called with an argument");

    this.bags.push(bag);
  }

  throwError(condition, message) {
    if (condition) throw new Error(message);
  }
}

module.exports = Person;
