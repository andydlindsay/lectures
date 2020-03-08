# Intro to TypeScript

### To Do
* [ ] What is TypeScript?
* [ ] TypeScript CLI
* [ ] Primitive Types
* [ ] Arrays
* [ ] Objects
* [ ] Functions
* [ ] Generics

### What is TypeScript?
* A [superset](https://encyclopedia2.thefreedictionary.com/superset) of JavaScript
* TypeScript adds types to JavaScript
* TypeScript is [transpiled](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them) into JavaScript as part of a build step
* **All** JavaScript is valid TypeScript
* Catches errors before they are discovered at [runtime](https://searchsoftwarequality.techtarget.com/definition/runtime) (Yay! No more `cannot read property 'x' of undefined` errors!)

### TypeScript CLI
* Installing the [TypeScript CLI](https://www.npmjs.com/package/typescript) globally is a quick way to get started
* After installation, we have access to the TypeScript compiler (or `tsc`) in the command line

```sh
# uses default settings; .js file will have the same name as .ts file
tsc index.ts # produces index.js file

# compile to named destination file
tsc index.ts --outFile my-index.js # produces my-index.js

# add the watch flag to avoid having to manually trigger the compiler
tsc index.ts --watch # watches for changes to index.ts

# the target flag allows us to specify the version of JS we are compiling to
tsc index.ts --target es6 # compiles to es6 syntax JS
```

* The compiler can be customized and supports [many command line options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
* The compiler will scan our code and throw errors if any violations are found

### Primitive Types
* Types can be specified using colon (:) syntax immediately after the variable name

```ts
const str: string = 'hello world';
const isLoggedIn: boolean = false;
const num: number = 3.14;

// for simple types, the type can be inferred and doesn't need to be specified
const myStr = 'hello again';
```

* If we try to assign a different type to a variable, the compiler will throw an error

```ts
let numTwo: number = 4;
numTwo = 'hello';
```

```sh
error TS2322: Type '"hello"' is not assignable to type 'number'.
```

* We can specify multiple types using the pipe (`|`) operator

```ts
// numTwo can be either a string or a number
let numTwo: number | string = 4;
numTwo = 'hello';
// now no error

numTwo = true;
// error again!
```

```sh
error TS2322: Type 'false' is not assignable to type 'string | number'.
```

### Arrays
* Arrays are just collections of a type

```ts
// let TS know that myArr will hold numbers only
const myArr: number[] = [1, 2, 3];
myArr.push(4);
myArr.push(false); // error!
```

```sh
error TS2345: Argument of type 'false' is not assignable to parameter of type 'number'.
```

### Objects
* Objects are more complex
* We create an `interface` to type an object

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

```sh
error TS2739: Type '{}' is missing the following properties from type 'Author': name, penName
```

* Note: The optional param `isActive` did not appear in the list of missing properties
* **Hack:** To force TypeScript to accept a type, use the `as` keyword

```ts
const agatha: Author = {}; // error!
const stephen: Author = {} as Author; // no error
```

* Use `as` with caution as it completely removes the type safety

### Functions
* For functions, we specify the type of the arguments **and** the return type

```ts
// sayHello accepts a string as an argument and returns a string
const sayHello = (name: string): string => {
  return `Hello ${name}`;
};

// also works with the function keyword
const sayHelloFn = function(name: string): string {
  return `Hello ${name}`;
};
```

```sh
# error for not returning anything
error TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.

# error for returning an incorrect type
error TS2322: Type 'true' is not assignable to type 'string'.
```

* If the function doesn't return anything, the return type is `void`

```ts
const noReturn = function(name: string): void {
  console.log(name);
};
```



### Useful Links
* [TypeScript Official Site](https://www.typescriptlang.org/)
* [TypeScript Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
* []()
