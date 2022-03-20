let  mongo = require('mongoose');
let schema = mongo.Schema({
    todo:String,
    isCompleted:Boolean
})

module.exports=mongo.model("todolist",schema)