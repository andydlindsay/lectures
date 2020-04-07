const stop = 10000;
const startTime = new Date().getTime();

for (let i = 0; i < stop; i++) {
  const date = new Date();
  console.log(date);
}

const endTime = new Date().getTime();
const elapsedTime = endTime - startTime;
console.log(`that took ${elapsedTime}ms to complete`);
