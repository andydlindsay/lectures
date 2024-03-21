const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question('What do you think of Node.js? ', (answer) => {
  answers.push(answer);
  rl.question('What\'s your name? ', (answer) => {
    answers.push(answer);
    rl.question('What\'s your favourite activity? ', (answer) => {
      answers.push(answer);
      rl.question('What do you listen to while doing that? ', (answer) => {
        answers.push(answer);
        rl.question('Which meal is your favourite? ', (answer) => {
          answers.push(answer);
          rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
            answers.push(answer);
            rl.question('Which sport is your absolute favourite? ', (answer) => {
              answers.push(answer);
              rl.close();

              const node = answers[0];
              const name = answers[1];
              const activity = answers[2];
              const music = answers[3];
              const meal = answers[4];
              const food = answers[5];
              const sport = answers[6];

              console.log();
              console.log('Your profile is ready!!');
              console.log(`My name is ${name} and I really like ${activity}! I listen to ${music} while eating ${food} during ${meal} and playing ${sport}... and I think Node is ${node}!!`);
            });
          });
        });
      });
    });
  });
});
