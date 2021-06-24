var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res){
  if (req.url=="/"){
    let data = fs.readFileSync("home.html");
    res.end(data);    
  }
  else if (req.url=="/Contact"){
    let data = fs.readFileSync("contact.html");
    res.end(data); 
  }
  else if (req.url=="/About"){
    let data = fs.readFileSync("about.html");
    res.end(data); 
  }
  else if (req.url=="/Terms"){
    let data = fs.readFileSync("terms.html");
    res.end(data); 
  }

});
server.listen(8080);
console.log("server working successfully");