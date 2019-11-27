# W1D3 - Objects in JS

### To Do
- [ ] Review primitive types
- [ ] Objects!
- [ ] Passing primitives and objects to functions
- [ ] Functions inside objects (using `this`)

### Primitive Types
- JavaScript has 7 primitive types:
  - Boolean
  - Null
  - Undefined
  - Number
  - BigInt
  - String
  - Symbol

```js
const bool = false;
const nul = null;
const undef = undefined;
const num = 5;
const bigint = 9007199254740991n;
const str = 'This is a string';
const sym = Symbol('symbol');
```

- Primitive types are immutable; this means that they cannot be modified after they are created

```js
const myString = 'hello world';
const secondString = myString.replace('hello', 'goodbye'); // doesn't change myString
console.log(myString); // 'hello world'
```

### Objects!
- Objects are data structures that allow us to store related data and functionality together
- Objects are key/value pairs
- In arrays, you use the index to access a value:

```js
const arr = [1, 2, 3];
console.log(arr[1]); // 2
```

- With objects, you use the key to access the value:

```js
const myObj = {
  firstName: 'Lorem',
  lastName: 'Ipsum'
};

// we have two options for accessing values
// dot syntax
console.log(myObj.firstName); // Lorem

// and square bracket syntax
console.log(myObj['lastName']); // Ipsum
```

- If you know the name of the property, use dot syntax
- If the name of the property is dynamic (such as stored in a variable), use square bracket syntax

### Passing Values to Functions
- Primitive types are passed to functions by value. This means that a copy is made and used by the function. The original value is unchanged.

```js
const name = 'Murray';
const changeName = function (name) {
  name = 'Jane';
  console.log(name); // Jane
};
changeName(name);
console.log(name); // Murray
```

- Objects are passed to functions by reference. This means that the internal values of the object can be changed by the function, but it cannot be reassigned.

```js
const myObj = {
  firstName: 'Lorem',
  lastName: 'Ipsum'
};
const changeKey = function (obj) {
  obj.firstName = 'Jane';
}
changeKey(myObj);
console.log(myObj.firstName); // Jane
```


### Useful Links
* []()
