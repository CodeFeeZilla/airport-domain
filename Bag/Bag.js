class Bag {
  constructor(weight) {
    this.weight = weight;

    if (!this.weight) throw new Error("bag must have a weight");
    if (typeof this.weight !== "number")
      throw new Error("weight of bag must be a number");
  }

  isOverLimit() {
    return this.weight > 100;
  }
}

module.exports = Bag;
