const fs = require('fs');
const http = require('http');
const PORT = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res) => {

  const handleReadFile=(statusCode, fileLoc) => {
    fs.readFile(fileLoc,(error, data) => {
      res.writeHead(statusCode,{'Content-Type':'text/html'});
      res.write(data);
      res.end();
     
    });
  }


  if(req.url == '/' || req.url == '/home'){
    handleReadFile(200, "./views/home.html")
    
  }
  else if(req.url == '/about'){
    handleReadFile(200,"./views/about.html");
  }
  else if(req.url == '/contact'){
    handleReadFile(200,"./views/contact.html");
  }
  else {
    handleReadFile(404,"./views/error.html");

  }
});

server.listen(PORT,hostname,()=> {
  console.log(`Server is running at http://${hostname}:${PORT}`);
});
