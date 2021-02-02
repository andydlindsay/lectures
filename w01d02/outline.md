### Goals
- Curriculum overview (using these [slides](https://docs.google.com/presentation/d/1m3R_aN4S5YoCBmXRbjaZQGatygWyZXYLcN-fkcP_HWA)) (~15 minutes)
- Writing code incrementally
- Problem solving tips
- Basic git workflow (init -> add -> commit -> push)

### Upfront
- Students should not be trying to code-along during lecture
- This is a discussion meant to facilitate a deeper learning of the coding concepts
- Lecturers will make mistakes

### Curriculum Outline
- Week 1 && 2: Fundamentals (FOCAL)
- Week 3: Web Servers
- Week 4: JavaScript in the Browser
- Week 5: Persistent Data
- Week 6: Mid-terms
- Week 7 && 8: Front-end Framework
- Week 9 && 10: Legacy Codebase
- Week 11 && 12: Finals

- Fundamental Fridays (programming tests/comp sci/research & reflect)
- Technical Interviews x 3 (W2, W4, W9)
- Career Services

### Compass
* Not an instruction manual
* It's a To Do list
* Instruction is sought elsewhere

### Problem:
> Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. If any argument is not a whole number, skip it. Do not support negative numbers.

### Logic Syntax Data (LSD)
- Logic: have I told the computer exactly what to do?
- Syntax: am I missing a curly brace?
- Data: do I have the data I think I do in the format I expect?

### Keep in Mind
- Doing things with intention (you are not a passenger)
- Refactor the solution into functions as you go
- Write in small steps (incrementally)
- Proper indentation of code
- Avoid copy/paste
- Errors are your friend
- Google => StackOverflow => Documentation (MDN)
- Use the Node REPL to play with the code

### Python Tutor/JS Tutor

### Terrible Code

```js
const result = process
  .argv
  .slice(2)
  .map(Number)
  .filter(Number.isInteger)
  .filter(e => e > 0)
  .reduce((a, c) => a + c, 0);
  
console.log('result:', result);
```

### Probable Workflow

```js
// console.log process.argv
console.log(process.argv);
```

```bash
node command-line.js # [node, file_path]

node command-line.js hello world # [node, file_path, 'hello', 'world']
```

* Google "javascript remove elements from array"
* Visit [w3schools array methods](https://www.w3schools.com/js/js_array_methods.asp)
* Experiment with `shift` and `splice`
* Splice mutates the original array
* Show that `slice` returns a new array :)

```js
const args = process.argv.slice(2);
console.log(args);
```

```bash
node command-line.js # []

node command-line.js hello world # ['hello', 'world']
```

* It's annoying to pass in command line arguments every time, create an array in memory
* Run through different options for iterating through an array: c-style, `for..of`, `for..in`

```js
const myArr = ['10', '5', '20'];

for (let i = 0; i < myArr.length; i++) {
  console.log('current element:', myArr[i]);
}

console.log();

for (const element of myArr) {
  console.log('current element:', element);
}

console.log();

for (const index in myArr) {
  console.log('current element:', myArr[index]);
}
```

* Try adding the elements together in a `for..of` loop

```js
let total = 0;

for (const element of myArr) {
  total += element;
}

console.log('total:', total); // total: 010520
```

* Google how to convert a string to a number
* Experiment with `Number` in the repl
* Update our JS

```js
for (const element of myArr) {
  total += Number(element);
}

console.log('total:', total); // total: 35
```

* Base problem solved, what about decimals?

```js
const myArr = ['10', '5', '20', '4.5'];

console.log('total:', total); // total: 39.5
```

* Google "javascript check if integer"
* Experiment with `Number.isInteger` in the repl
* Update our JS

```js
for (const element of myArr) {
  const converted = Number(element);
  if (Number.isInteger(converted)) {
    total += converted;
  }
}

console.log('total:', total); // total: 35
```

* All good, what about negative numbers?

```js
const myArr = ['10', '5', '20', '4.5', '-50'];

console.log('total:', total); // total: -15
```

* Check if the number is greater than zero

```js
for (const element of myArr) {
  const converted = Number(element);
  if (converted > 0) {
    if (Number.isInteger(converted)) {
      total += converted;
    }
  }
}

console.log('total:', total); // total: 35

// which could refactor to:
for (const element of myArr) {
  const converted = Number(element);
  if (converted > 0 && Number.isInteger(converted)) {
    total += converted;
  }
}
```

* Update the loop to use values from the command line

```js
for (const element of sliced) {
```

```bash
node command-line.js 5 10 15 # total: 30
node command-line.js 4.5 2.5 19 # total: 19
node command-line.js -5 5 10 # total: 15
```
