const net = require('net');
const port = 54321;

// create the tcp server
const server = net.createServer();

// array to hold connections
const connections = [];

// add connection event listener
server.on('connection', (connection) => {
  console.log('a new client has connected');

  // send a message to the client
  connection.write('hello there!');

  // add this connection to our connections array
  connections.push(connection);

  // listen for an incoming message
  connection.on('data', (messageFromClient) => {
    console.log('client says:', messageFromClient.trim());

    if (messageFromClient.startsWith('setName:')) {
      const name = messageFromClient.split(' ')[1].trim();
      return connection.username = name; 
    }

    for (const con of connections) {
      if (con !== connection && !con._writableState.finished) {
        con.write(`${connection.username} says: ${messageFromClient.trim()}`);
      }
    }
  });

  // set the encoding to utf-8
  connection.setEncoding('utf-8');
});

// start the server listening
server.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});
