let mongo = require('mongoose');
require("dotenv/config");

mongo.connect(process.env.My_Data,function(err){
    if(err) throw err;
    console.log("db created successfully")
})

module.exports=mongo