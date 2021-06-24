var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
 
  if(req.url="/") {

// exist file
    fs.exists("home.html", function(result) {
      if(result){
        res.end("file ache");
      }else{
        res.end("file nai");

      }
    });

    // let result = fs.existsSync('demo.txt');
    // if(result) {
    //   res.end("true");
    // }
    // else {
    //   res.end("false");
    // }


//deleete file

// let error = fs.unlinkSync('demoSyncnewneww.txt');
//   if(error) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("file delete failed.");
//     res.end();
//   }
//   else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("file delete successfull.");
//     res.end();
//   }



// rename file Sync
    // let error = fs.renameSync('demoSyncnew.txt', 'demoSyncnewneww.txt');
    //   if(error) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write("file rename success");
    //     res.end();
    //   }
    //   else {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write("file rename failed.");
    //     res.end();
    //   }



// rename file
    // fs.rename('demo.txt', 'demoNew.txt', function(error) {
    //   if(error) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write("file rename failed.");
    //     res.end();
    //   }
    //   else {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write("file rename successfull.");
    //     res.end();
    //   }
    //   });



// sync file write
  // let error = fs.writeFileSync('demoSync.txt','Welcome sync');
  // if(error) {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write("file write failed");
  //   res.end();
  // } else {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write("file write successeed");
  //   res.end();
  // }




  // fiile wwrite asyncronous
      // fs.writeFile('demo.txt', 'ami ekta tut tut', function (error) {
        // if(error) {
        //   res.writeHead(200, {'Content-Type': 'text/html'});
        //   res.write("file write failed");
        //   res.end();
        // } else {
        //   res.writeHead(200, {'Content-Type': 'text/html'});
        //   res.write("file write successeed");
        //   res.end();
        // }
      // });

// sync file read
    // let mydata= fs.readFileSync('home.html');

    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(mydata);
    // res.end();

// async

    // fs.readFile('home.html', function(error,data) {
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    //   res.write(data);
    //   res.end();
    // });

  }

});
server.listen(3300);
console.log("server run success");