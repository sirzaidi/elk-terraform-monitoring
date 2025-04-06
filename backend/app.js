require('newrelic'); // New Relic instrumentation

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  res.end('Hello from Mahdi Backend!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

