const delays = [2500, 5000, 500, 768, 817, 2345, 612, 499, 1];

const myFn = (nums) => {
  // iterate through delays array
  for (const delay of nums) {
    setTimeout(() => {
      console.log(delay);
    }, delay);
  }
};

myFn(delays);
