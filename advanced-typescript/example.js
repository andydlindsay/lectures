const str = 'hello world';
const isLoggedIn = false;
const num = 2.7;
let numTwo = 4;
numTwo = 'hello';
// numTwo = false;
const arr = [1, 2, 3];
arr.push(4);
const agatha = {
    name: 'Agatha Christie',
    penName: 'the same'
};
const stephen = {};
const sayHello = (name) => {
    return `Hello ${name}`;
};
const sayHelloFn = function (name) {
    return `Hello ${name}`;
    // return true;
};
const noReturn = function (name) {
    console.log(name);
};
const returnsPromise = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(name), 1000);
    });
};
