const userTemplate = require('./template');
const arrayTemplate = require('./array');

const userVars = {
  username: 'andylindsay',
  firstName: 'Andy',
  lastName: 'Lindsay',
  dateJoined: '2019-01-01'
};

const arrayVars = {
  username: 'andylindsay',
  todos: [
    { id: 1, task: 'go shopping' },
    { id: 2, task: 'walk the dog' },
    { id: 3, task: 'take out garbage' }
  ]
};

const userRendered = userTemplate(userVars);
const arrayRendered = arrayTemplate(arrayVars);

console.log(userRendered);
console.log(arrayRendered);
