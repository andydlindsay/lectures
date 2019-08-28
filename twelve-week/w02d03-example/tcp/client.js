const net = require('net');

// begin reading from stdin so process doesn't exit
process.stdin.resume();

// create a connection with the server over tcp
const client = net.createConnection({
  host: '10.0.0.175',
  port: 3000
});

// set encoding on communication
client.setEncoding('utf8');

// send anything typed in the terminal to the server
process.stdin.on('data', (data) => {
  client.write(data);
});

// write any incoming data to the terminal
client.on('data', (data) => {
  console.log(`${data.replace('\n', '')}`);
});
