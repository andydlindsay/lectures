const net = require('net');
const port = 3000;

// create the tcp server
const server = net.createServer();

// an array to hold all of the connections to the server
const connections = [];

// event listener for any new connections to the server
server.on('connection', (connection) => {
  console.log('Client connected');

  // set the character encoding on any communication
  connection.setEncoding('utf-8');

  // add the new connection to the connections array
  connections.push(connection);

  // send a message to the client using the write method
  connection.write('Hello client!\n\n');

  // event listener for any data coming in over the connection
  connection.on('data', (data) => {
    console.log('Data from client:', data.replace('\n', ''));

    // loop over the connections and send each one the data
    connections.forEach((con) => {
      if (con !== connection) {
        con.write(`Client: ${data}`);
      }
    });
  });
});

// event listener for any errors
server.on('error', (error) => {
  console.log('Error:', error);
});

// start the server listening on the provided port
server.listen(port);

// connect using telnet <host> <port>
// see open connections using netstat -vanp tcp | grep -i listen
