const http = require('http');
const os = require('os');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello from Azure Container Apps test!',
    hostname: os.hostname(),
    time: new Date().toISOString()
  }));
});

server.listen(port, () => console.log(`Listening on port ${port}`)); 