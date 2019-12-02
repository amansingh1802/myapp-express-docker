const express = require ("express");
const bodyParser = require ('body-parser')
const routeProduct = require('./routes/product')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // update to match the domain you will make the request from

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json())
app.use('/product',routeProduct)

app.get('/',(request,response)=>{
    response.send('welcome to my backend')
})



app.listen(9000,'0.0.0.0',()=>{
    console.log("server started at port 9000")
})


//total the thing is that angular and express are contacting each othher on port 9898
//and express  is contacting with db cnatiner on its ip172.17.0.1 and port no 9090 which is forwarded to port 3306
