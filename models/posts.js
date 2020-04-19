const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
  title :  { type: String , required:true , maxlength :20 } , 
  body  : { type: String , required:true , maxlength :70 }  ,
  author :{type: mongoose.Schema.Types.ObjectId ,ref : "User"}

 })

 const postModel = mongoose.model("Post", postSchema)
 module.exports = postModel