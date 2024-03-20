### Goals
- Curriculum overview (using these [slides](https://docs.google.com/presentation/d/1_NWYcPhS6Q3hQKXnh09Eufl7hs45yBLbUBZhWyvqeSc/edit?usp=sharing)) (~15 minutes)
- Writing code incrementally
- Problem solving tips
- Basic git workflow (init -> add -> commit -> push)

### AI Responsibility
* Avoid integrated tooling for now
* Don't use AI in tests/interviews
* Don't use it to get answers/solutions
* Warning: AI can hallucinate!

### Upfront
- Students should not be trying to code-along during lecture
- This is a discussion meant to facilitate a deeper learning of the coding concepts
- Lecturers will make mistakes

### Curriculum Outline
- Module 1 (w1-w4): Fundamentals (FOCAL) - Lotide
- Module 2 (w5): Networking and HTTP for Web Developers - Snek
- Module 3 (w6-w7): Intro to Web Server Development - TinyApp
- Module 4 (w8-w11): Intro to Front-end Development - Tweeter
- Module 5 (w12-w13): Relational Databases and SQL - LighthouseBnB
- Module 6 (w14-w15): Midterm Project
- Module 7 (w16-w19): React - PhotoLabs
- Module 8 (w20-w21): Automated Testing in React
- Module 9 (w22-w26): Ruby on Rails - Jungle
- Module 10 (w27-w30): Final Project
- Programming Tests (6 in total)
- Technical Interviews (2)

### Delivery Options
* Lectures
* Breakouts
* Assistance Requests (AR's)
* Office Hours
  * Show in Discord
  * Reminder to update Discord username to match Compass and Zoom

### Compass
* Not an instruction manual
* It's a To Do list
* Instruction is sought elsewhere

### Problem:
> Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. If any argument is not a whole number, skip it. Do not support negative numbers.

### Keep in Mind
- Doing things with intention (you are not a passenger)
- Refactor the solution into functions as you go
- Write in small steps (incrementally)
- Proper indentation of code
- Avoid copy/paste
- Errors are your friend
- Google => StackOverflow => Documentation (MDN)
- Use the Node REPL to play with the code

### Probable Workflow

```js
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
