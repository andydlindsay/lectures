const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rlp.questionAsync('What do you think of Node.js? ')
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What\'s your name? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What\'s your favourite activity? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What do you listen to while doing that? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('Which meal is your favourite? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What\'s your favourite thing to eat for that meal? ');
  })
  .then((answer) => {
    answers.push(answer);
    rlp.close();
    const [node, name, activity, music, meal, food] = answers;
    console.log();
    console.log(`My name is ${name} and I really like ${activity}! I listen to ${music} while eating ${food} during ${meal}... and I think Node is ${node}!!`);
  });
