const nums = [2500, 5000, 500, 768, 817, 2345, 612, 499, 1];

const myFn = (delays) => {
  for (const delay of delays) {
    setTimeout(() => {
      console.log(delay);
    }, delay);
  }
};

myFn(nums);

// with sorting and returns the sorted array
// const nums = [2500, 5000, 500, 768, 817, 2345, 612, 499, 1];

// const myFn = (delays, cb, isAsc = true) => {
//   const sorted = [];
//   const maxDelay = Math.max(...delays);

//   // iterate through delays array
//   for (const delay of delays) {
//     setTimeout(() => {
//       sorted.push(delay);
//     }, isAsc ? delay : maxDelay - delay);
//   }
  
//   setTimeout(() => cb(sorted), maxDelay + 1);
// };

// myFn(nums, (asc) => console.log('asc', asc));
// myFn(nums, (desc) => console.log('desc', desc), false);
