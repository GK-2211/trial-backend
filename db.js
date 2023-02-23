const mysql = require ('mysql');

const dotenv = require ('dotenv');

dotenv.config({path : './db.env'})

const con=mysql.createConnection({
    host : process.env.host,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database,
})

con.connect(function(err){
    if(err)
    console.log(err);
    else
    console.log("connected");
})

module.exports = con;

 