const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) => {
  res.writeHead(500, {'Content-Type' :'text/plain'});
  res.write("<h1>Hello thereeee</h1>");
  res.end();


});

myServer.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}`);
});