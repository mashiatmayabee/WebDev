const express = require('express');
const app = express();
const port = 2900;

app.get('/' , (req , res)=>{
  const id = req.header("id");
  const name = req.header("name");
  
     res.send(`<h1>student id = ${id} </br> student name : ${name} </h1>`);
  // //route parameter
//   const id = req.params.id;
//   const age = req.params.age;
//    res.send(`<h1>student id = ${id} </br> student age : ${age} </h1>`);



//query parameter 
  // // const id = req.query.id;
  // // const name = req.query.name;
  // const {id, name} = req.query;
  //  res.send(`<h1>student name = ${name} </br> student id : ${id} </h1>`);
});

app.listen(port, ()=> {
  console.log(`server is running at http://localhost:${port}`);
});
