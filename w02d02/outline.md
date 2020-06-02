# Outline

### Reading Code/Run It in Your Head
* Always have a guess about what the code will do before you run it
* Try to read the code as the computer would; not necessarily from top to bottom
* It's fine to be wrong; adjust your next guess accordingly

### Blocking Code

```js
for (let i = 0; i < 10000; i++) {
  const date = new Date();
  console.log(date);
}

console.log('all done?');
```

```js
const startTime = new Date().getTime();

for (let i = 0; i < 10000; i++) {
  const date = new Date();
  console.log(date);
}

const endTime = new Date().getTime();
const elapsedTime = endTime - startTime;
console.log(`that took ${elapsedTime}ms to complete`);
```

### Intro to setTimeout
* Part of the breakout

```js
setTimeout(() => {
  console.log('woop woop');
}, 3000);

setTimeout(() => {
  console.log('hey hey');
}, 2000);
```

### Non-Blocking Code
* Part of the breakout

```js
console.log('before the setTimeout');

setTimeout(() => {
  console.log('inside the setTimeout');
}, 1000);

console.log('after the setTimeout');
```

```js
// what about with zero delay?
console.log('before the setTimeout');

setTimeout(() => {
  console.log('inside the setTimeout');
}, 0);

console.log('after the setTimeout');
```

### Returning Values from Async Code

```js
const higherOrderFn = (cb) => {
  const data = {
    username: 'alice'
  };

  console.log('before timeout call');

  setTimeout(() => {
    data.username = 'bob';
    cb();
  }, 1000);

  console.log('after timeout call');
};

console.log('before main call');
const result = higherOrderFn(() => {
  console.log('inside callback');
});
console.log('after main call');
```

### Multiple setTimeouts

```js
const nums = [2500, 5000, 500, 768, 817, 2345, 612, 499, 1];

const myFn = (delays) => {
  for (const delay of delays) {
    setTimeout(() => {
      console.log(delay);
    }, delay);
  }
};

myFn(nums);
```

```js
// with sorting and returns the sorted array
const nums = [2500, 5000, 500, 768, 817, 2345, 612, 499, 1];

const myFn = (delays, cb, isAsc = true) => {
  const sorted = [];
  const maxDelay = Math.max(...delays);

  // iterate through delays array
  for (const delay of delays) {
    setTimeout(() => {
      sorted.push(delay);
    }, isAsc ? delay : maxDelay - delay);
  }
  
  setTimeout(() => cb(sorted), maxDelay + 1);
};

myFn(nums, (asc) => console.log('asc', asc));
myFn(nums, (desc) => console.log('desc', desc), false);
```

### setInterval

```js
let iterations = 0;

const interval = setInterval(() => {
  iterations++;
  console.log('hello there!');
  
  if (iterations > 10) {
    clearInterval(interval);
  }
}, 1000);
```

### File System

```js
// sync
const fs = require('fs');

const data = fs.readFileSync('./index.html', { encoding: 'utf8' });
console.log(data);

console.log('I am here');
```

```js
// async with a callback
const cb = (err, data) => {
  if (err) throw err;
  console.log(data);
};

fs.readFile('./index.html', { encoding: 'utf8' }, cb);
```
