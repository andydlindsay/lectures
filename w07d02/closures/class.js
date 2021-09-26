class Counter {
  constructor() {
    this.counter = 0;
  }

  incrementCounter() {
    this.counter++;
    console.log(this.counter);
  }
}

module.exports = Counter;
