// Problem:
// Write a node program that takes in an unlimited number of command line arguments
// and prints out the sum of them. 
// If any argument is not a whole number, skip it. 
// Do not support negative numbers though.

// console.log('process.argv', process.argv);

const commandLineArgs = process.argv;

// using shift
// commandLineArgs.shift();
// commandLineArgs.shift();

// using splice
// console.log('before', process.argv);
// commandLineArgs.splice(0, 2);
// console.log('after', process.argv);

// using slice
const sliced = commandLineArgs.slice(2);

// console.log();
// console.log('commandLineArgs', commandLineArgs);
// console.log('sliced', sliced);

const myArr = ['10', '5', '20', '4.5', '-50'];

let total = 0;

for (const element of sliced) {
  const converted = Number(element);
  if (converted > 0 && Number.isInteger(converted)) {
    total += converted;
  }
}

console.log('total:', total);

const result = process
  .argv
  .slice(2)
  .map(Number)
  .filter(Number.isInteger)
  .filter(e => e > 0)
  .reduce((a, c) => a + c, 0);

console.log('result:', result);
