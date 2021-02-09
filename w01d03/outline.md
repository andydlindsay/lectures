## Preamble
- Students should not be trying to replicate the same code on their screen and instead be paying attention and collaborating/questioning the code that's being written on screen
- This discussion is meant to facilitate a deeper learning of the coding concepts

### Tips for Success
- Ask for assistance, even if it's just a code review
- Ask questions during lecture
- Refine your Googling skills

### Imposter Syndrome
- Everyone suffers from it at some point or another

## Outline

### Primitive Types
- boolean, null, undefined, number, bigint, string, symbol
- Primitive types are immutable (they cannot be modified after they are created)

```js
const bool = false;
const nul = null;
const undef = undefined;
const num = 5;
const bigint = 9007199254740991n;
const str = 'This is a string';
const sym = Symbol('symbol');

const myString = 'hello world';
const secondString = myString.replace('hello', 'goodbye'); // doesn't change myString
console.log(myString); // 'hello world'
```

## Objects
- Objects are primarily key/value pairs
- Objects are known by different names in different programming languages such as associative array, map, dictionary, hash
- Keys are always strings
- Values can be any valid JS value (primitive, array, object, function)
- Arrays use the index to access the value
- Objects use the key to access the value

## Passing Values to Functions
- Primitives are passed by value. The outer value cannot be changed.
- Objects are passed by reference. The internal data can be changed (but the object cannot be reassigned)

## Functions Inside Objects
- Since functions are values, we can store them inside an object
- We can invoke them in the same way as regular functions
- Functions in objects are called `methods`

## LSD
- Logic: have I told the computer exactly what to do?
- Syntax: am I missing a curly brace?
- Data: do I have the data I think I do in the format I expect?
