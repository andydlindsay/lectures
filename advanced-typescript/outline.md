# Outline

### TypeScript Compiler

```sh
tsc index.ts # produces index.js
tsc index.ts --outFile my-index.js # produces my-index.js
tsc index.ts --target es6 # compiles to es6 syntax JS
tsc index.ts --watch # watches for changes to index.ts

tsc --init # will create a tsconfig.json file in the current directory
tsc # looks for a tsconfig.json file
```

### Primitive Types

```ts
const str: string = 'hello world';
const isLoggedIn: boolean = false;
const num: number = 3.14;
```

```ts
// try to pass in a wrong type
let numTwo: number = 4;
numTwo = 'hello';
```

### Multiple Types

```ts
// numTwo can be either a string or a number
let numTwo: number | string = 4;
numTwo = 'hello'; // no error

numTwo = true; // error!
```

### Arrays

```ts
// let TS know that myArr will hold numbers only
const myArr: number[] = [1, 2, 3];
myArr.push(4);
myArr.push(false); // error!
```

### Objects

```ts
// the interface specifies which keys an object will have and what type the values will be
interface Author {
  name: string;
  penName: string;
  // optional params are marked with a question mark (?)
  isActive?: boolean;
}

const agatha: Author = {}; // error!
```

```ts
// using 'as' to force TS to accept the type
const agatha: Author = {}; // error!
const stephen: Author = {} as Author; // no error
```

### Functions

```ts
// sayHello accepts a string as an argument and returns a string
const sayHello = (name: string): string => {
  return `Hello ${name}`;
};
```

```ts
// if the function doesn't return anything, the return type is `void`
const noReturn = function(name: string): void {
  console.log(name);
};
```

```ts
// use a Promise generic to wrap the return type
const returnsPromise = (name: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(name), 1000);
  });
};
```

### Duck Typing
* "If it looks like a duck, walks like a duck, and quacks like a duck, then it's probably a duck."

```ts
// no need to specify string type
const name = 'Alice';

// works with interfaces as well
interface User {
  username: string;
  password: string;
};

// logInUser accepts a User type
const logInUser = (user: User): boolean => {
  return user.username === 'johnstamos';
};

// no type specified for potentialUser
const potentialUser = {
  username: 'johnstamos',
  password: 'pass123',
};

// no problem passing potentialUser to logInUser
const loggedIn = logInUser(potentialUser);
```

### Generics

```ts
interface Container<Type> {
  title: string;
  contents: Type
}

const numContainer: Container<number> = {
  title: 'number container',
  contents: 7
};

const stringContainer: Container<string> = {
  title: 'string container',
  contents: 'hello'
};

// it is common to shorten `Type` to simply `T`
interface Container<T> {
  contents: T
}
```

### Adding TS to React
* [React Docs: Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)

```sh
npx create-react-app my-app --template typescript

# or
yarn create react-app my-app --template typescript
```
