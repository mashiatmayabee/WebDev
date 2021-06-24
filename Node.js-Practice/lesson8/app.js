const express = require('express');
// const router = express.Router();
 const app = express();
const userRouter = require('./routes/user.routes');

app.use("/api/user",userRouter);

app.use("/register", (req, res) => {
   res.statusCode = 203;
   res.sendFile(__dirname+ '/views/register.html');
});
app.use("/login", (req, res) => {
   // res.cookie("name", "Raya");
   // res.cookie("age", 38);
   res.clearCookie("name");
   res.append("id", 2827);
   res.end();
});

app.use('/' , (req , res)=>{
   
   res.statusCode=200;
   res.sendFile(__dirname+ '/views/index.html');
});


app.use((req, res) => {
  res.send("<h1>404!!! Page Not Found</h1>");
})



/*
app.post('/' , (req , res)=>{

   res.send('hello from post from home rout :)');
   res.end();

})

app.put('/' , (req , res)=>{

   res.send('hello from put from home rout :)');
   res.end();

})

app.delete('/' , (req , res)=>{

   res.send('hello from delete from home rout :)');
   res.end();

})*/


 module.exports = app;