let myObj = { 'name': 'Jane' };

const alterObj = function(obj) {
  obj.name = 'Bob';
};

alterObj(myObj);

console.log('after alter:', myObj);

const reassignObj = function(obj) {
  obj = { 'something': 'new' };
};

reassignObj(myObj);

console.log('after reassign:', myObj);

const newObj = {
  firstName: 'Lorem',
  lastName: 'Ipsum',
  1: 'something',
  fullName: `${this.firstName} ${this.lastName}`,
  sayFullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  }
};

console.log(newObj.fullName);
const someOtherObj = newObj;
someOtherObj.sayFullName();
