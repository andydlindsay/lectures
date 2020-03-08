const str: string = 'hello world';
const isLoggedIn: boolean = false;
const num: number = 2.7;

let numTwo: number | string = 4;
numTwo = 'hello';
// numTwo = false;

const arr: number[] = [1, 2, 3];
arr.push(4);
// arr.push(false);

interface Author {
  name: string;
  penName: string;
  // optional params are marked with a ?
  isActive?: boolean;
}

const agatha: Author = {};
