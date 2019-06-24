const Node = require('./node');
const Stack = require('./stack');

module.exports = class Maze {
    constructor(width, length) {
        this.length = length;
        this.width = width;
        this.nodes = {};
        this.generateMaze();
    }

    initializeNodes() {
        this.nodes = {};
        for (let y = 0; y < this.length; y++) {
            for (let x = 0; x < this.width; x++) {
                this.nodes[`${x},${y}`] = new Node(x, y);
            }
        }
    }

    findNode(x, y) {
        return this.nodes[`${x},${y}`];
    }

    randomNode() {
        const randomX = Math.floor(Math.random() * this.width);
        const randomY = Math.floor(Math.random() * this.length);
        return this.nodes[`${randomX},${randomY}`];
    }

    findNeighbours(node) {
        const { x, y } = node;
        const neighbours = [];

        // above
        if (y - 1 >= 0) {
            neighbours.push([this.nodes[`${x},${y - 1}`], 'above']);
        }

        // right
        if (x + 1 < this.width) {
            neighbours.push([this.nodes[`${x + 1},${y}`], 'right']);
        }

        // below
        if (y + 1 < this.length) {
            neighbours.push([this.nodes[`${x},${y + 1}`], 'below']);
        }

        // left
        if (x - 1 >= 0) {
            neighbours.push([this.nodes[`${x - 1},${y}`], 'left']);
        }

        return neighbours;
    }

    generateMaze(width = this.width, length = this.length) {
        this.length = length;
        this.width = width;
        this.initializeNodes();

        const stack = new Stack();
        stack.push(this.randomNode());

        while (stack.length) {
            const currentNode = stack.peek();
            currentNode.visited = true;

            const neighbours = this
                .findNeighbours(currentNode)
                .filter((neighbour) => !neighbour[0].visited);

            if (neighbours.length) {
                const randomIndex = Math.floor(Math.random() * neighbours.length);
                const [ nextNode, direction ] = neighbours[randomIndex];

                currentNode[direction] = nextNode;

                let reverse;
                switch (direction) {
                    case 'above':
                        reverse = 'below';
                        break;
                    case 'right':
                        reverse = 'left';
                        break;
                    case 'below':
                        reverse = 'above';
                        break;
                    case 'left':
                        reverse = 'right';
                        break;
                }
                nextNode[reverse] = currentNode;

                stack.push(nextNode);
            } else {
                stack.pop();
            }
        }
    }
};
