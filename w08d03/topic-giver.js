const chalk = require('chalk');

const topics = [
  'useContext',
  'useRef',
  'React Router',
  'Component Libraries',
  'Class Components',
  'Styled Components'
];

while (topics.length) {
  const index = Math.floor(Math.random() * topics.length);
  const topic = topics.splice(index, 1)[0];
  console.log(chalk.magenta(topic));
}
