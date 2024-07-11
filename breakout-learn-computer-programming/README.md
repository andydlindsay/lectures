# How to Learn Computer Programing

### The Learning Cycle
* There are a variety of strategies and steps you can use in your approach to learning new topics and concepts
* Here is the cycle that we recommend for you to make the most of your time with us at Lighthouse Labs:  
  1. Create a dictionary of terms  
  2. Read your code: "What is this? What happens next?"
  3. Create a cheatsheet for each term in your dictionary
  4. Solve problems

![The Learning Cycle]()

### 

```js
/**
 * Writing Functions
 */

// Function declaration
function funcName(one, or, more, params) {
  // code / logic here...
  // we can return something!
}

// Invoking / running the function
funcName('test'); // Can pass in arguments

// Function expression (alternative syntax)
const funcExpression = function(one, or, more, params) {
  // code / logic here...
  // this function is not hoisted
  // we can return something!
};

funcExpression('test2');

// Arrow function expression
const arrowFuncExpression = (one, or, more, params) => {
  // code / logic here...
  // this function is not hoisted
  // `this` keyword is not bound to function
  // we can return something!
};

arrowFunctionExpression('test3');
```