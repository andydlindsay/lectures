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
// commandLineArgs.splice(0, 2);

// using slice
const sliced = commandLineArgs.slice(2);

// console.log();
// console.log('commandLineArgs', commandLineArgs);
// console.log('sliced', sliced);


// const myArr = ['10', '5', '20'];

// for (let i = 0; i < myArr.length; i++) {
//   console.log('current element:', myArr[i]);
// }

// console.log();

let total = 0;
for (const elem of sliced) {
  // console.log('current element:', elem);
  // console.log('current typeof element:', typeof elem);
  total += Number(elem);
}
console.log('total:', total);

// console.log();

// for (const index in myArr) {
//   console.log('current element:', myArr[index]);
// }



console.log(process.argv.slice(2).reduce((acc, cur) => acc + Number(cur), 0))

const result = process
  .argv
  .slice(2)
  .filter(e => !isNaN(e))
  .map(Number)
  .filter(Number.isInteger)
  .filter(e => e > 0)
  .reduce((a, c) => a + c, 0);
console.log('result:', result);





// 
