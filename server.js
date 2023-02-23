const express = require ('express');

const app = express();

const db = require('./db')

const userRouter=require('./routes/users')

port = process.env.port || 3000;

app.listen(port,function(){
    console.log("Sucessfully running");
})

app.use("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Content-Disposition", "application/binary");
    res.header("X-Frame-Options", "sameorigin");
    if (req.method == "OPTIONS") {
      res.send(200);
    } else {
      next();
    }
  });

  app.use('/user',userRouter);

