// inside spread.js
// const arr = [1, 2, 3];

// const copy = [// create a new reference
//   ...arr,
//   4
// ];

// // copy.push(4);

// console.log(arr); // [1, 2, 3]
// console.log(copy); // [1, 2, 3, 4]

const user = {
  username: 'alice',
  foods: ['hotdogs']
};

const copy = { // creates a new reference
  ...user,
  username: 'bob',
  foods: [
    ...user.foods,
    'waffles'
  ]
};

// copy.foods.push('waffles');

console.log(user); // { username: 'alice', foods: [ 'hotdogs' ] }
console.log(copy); // { username: 'bob', foods: [ 'hotdogs', 'waffles' ] }
