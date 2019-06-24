const Maze = require('./classes/maze');
const { renderMaze } = require('./helpers/helpers');

const maze = new Maze(20, 3);
renderMaze(maze);
console.log();

maze.generateMaze();
renderMaze(maze);
console.log();

maze.generateMaze();
renderMaze(maze);
