const Counter = require('./class');
const incrementCounter = require('./function');

console.log('--------- function ----------');
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();

console.log('--------- class ----------');
const counter = new Counter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
