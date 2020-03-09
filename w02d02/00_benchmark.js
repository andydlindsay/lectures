const stop = 100000;
const startTime = new Date().getTime();

let myDate;
for(let i = 0; i < stop; i++) {
  let date = new Date();
  myDate = date
  console.log(myDate);
}

console.log(myDate);
const endTime = new Date().getTime();
const duration = endTime - startTime;
console.log(`that took: ${duration}ms`);
