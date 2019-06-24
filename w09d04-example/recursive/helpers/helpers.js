module.exports.renderMaze = (maze) => {
    const layers = ['above', 'sides', 'below'];

    for (let length = 0; length < maze.length; length++) {
        for (const layer of layers) {
            for (let width = 0; width < maze.width; width++) {
                let output = '';
                const node = maze.findNode(width, length);
                switch (layer) {
                    case 'above':
                        if (node.above) {
                            output = '+  +';
                        } else {
                            output = '+--+';
                        }
                        break;
                    case 'sides':
                        if (node.left) {
                            output = '   ';
                        } else {
                            output = '|  ';
                        }
                        if (node.right) {
                            output += ' ';
                        } else {
                            output += '|';
                        }
                        break;
                    case 'below':
                        if (node.below) {
                            output = '+  +';
                        } else {
                            output = '+--+';
                        }
                        break;
                }
                process.stdout.write(output);
            }
            console.log();
        }
    }
}
