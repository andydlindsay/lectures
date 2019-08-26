const net = require('net');
const port = 3000;

const server = net.createServer();
const connections = [];

server.on('connection', (connection) => {
  console.log('Client connected');

  connection.setEncoding('utf-8');
  connections.push(connection);

  connection.write('Hello client!\n\n');

  connection.on('data', (data) => {
    console.log('Data from client:', data.replace('\n', ''));
    connections.forEach((con) => {
      if (con !== connection) {
        con.write(`Client: ${data.replace('\n', '')}\n`);
      }
    });
  });
});

server.on('error', (error) => {
  console.log('Error:', error);
});

server.listen(port);
