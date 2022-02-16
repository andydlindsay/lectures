const net = require('net');

const config = {
  host: 'localhost',
  port: 54321
};

const client = net.createConnection(config);

client.on('data', (messageFromServer) => {
  console.log(messageFromServer);
});

client.setEncoding('utf-8');

// client.write('hey hey hey');

process.stdin.on('data', (data) => {
  client.write(data);
});
