const fs = require('fs');
const http = require('http');
const PORT = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res) => {
  if(req.url == '/' || req.url == '/home'){
    fs.readFile("index.html",(error, data) => {
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if(req.url == '/about'){
    fs.readFile("about.html",(error, data) => {
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if(req.url == '/contact'){
    fs.readFile("contact.html",(error, data) => {
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  }
  else {
    fs.readFile("error.html",(error, data) => {
      res.writeHead(404,{'Content-Type':'text/html/css'});
      res.write(data);
      res.end();  
    });
  }
});

server.listen(PORT,hostname,()=> {
  console.log(`Server is running at http://${hostname}:${PORT}`);
});
