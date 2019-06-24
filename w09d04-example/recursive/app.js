const Maze = require('./classes/maze');
const { renderMaze } = require('./helpers/helpers');

const maze = new Maze(20, 6);
renderMaze(maze);
