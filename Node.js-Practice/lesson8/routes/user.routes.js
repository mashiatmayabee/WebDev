const express = require('express');
const router = express.Router();


router.get('/register' , (req , res)=>{
  res.send('<h1>hello from simple get request at register rout :)</h1>');
})

router.get('/login' , (req , res)=>{
  res.send('<h1>hello from simple get request from login rout :)</h1>');
})

module.exports = router;