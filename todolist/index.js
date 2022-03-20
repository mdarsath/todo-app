let exp = require('express');
let router = require('./router')
let app = exp();
let cors = require('cors')
let mw = require("morgan")
require("./db")

app.use(exp.json())
app.use(cors());
app.use(mw("dev"));
app.use('/',router)


app.listen(4000,function(err){
    console.log("server started")
})