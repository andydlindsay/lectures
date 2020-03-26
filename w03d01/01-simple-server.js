const http = require('http');
const port = 3000;

const server = http.createServer((request, response) => {
  response.end('hello world');
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
