module.exports.renderMaze = (maze) => {
    const layers = ['above', 'sides', 'below'];

    for (let y = 0; y < maze.length; y++) {
        for (const layer of layers) {
            for (let x = 0; x < maze.width; x++) {
                let output = '';
                const node = maze.findNode(x, y);
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
