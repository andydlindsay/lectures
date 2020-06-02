let iterations = 0;

const interval = setInterval(() => {
  iterations++;
  console.log('hello there!');
  
  if (iterations > 10) {
    clearInterval(interval);
  }
}, 1000);
