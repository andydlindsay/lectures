const chalk = require('chalk');

module.exports.renderMaze = (maze) => {
    const layers = ['above', 'sides', 'sides', 'sides', 'below'];

    for (let y = 0; y < maze.length; y++) {
        for (const layer of layers) {
            for (let x = 0; x < maze.width; x++) {
                let output = '';
                const node = maze.findNode(x, y);
                switch (layer) {
                    case 'above':
                        if (node.above) {
                            output = '+     +';
                        } else {
                            output = '+-----+';
                        }
                        break;
                    case 'sides':
                        if (node.left) {
                            output = '      ';
                        } else {
                            output = '|     ';
                        }
                        if (node.right) {
                            output += ' ';
                        } else {
                            output += '|';
                        }
                        break;
                    case 'below':
                        if (node.below) {
                            output = '+     +';
                        } else {
                            output = '+-----+';
                        }
                        break;
                }
                if (node.active) {
                    process.stdout.write(chalk.green(output));
                } else {
                    process.stdout.write(output);
                }
            }
            console.log();
        }
    }
    console.log();
    this.sleep(200);
}

module.exports.sleep = (milliseconds) => {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
