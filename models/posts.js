const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  firstName : String , 
  lastName : String ,
  password : String ,
  dob :Date ,
  gender : String ,
  email : String , 
  phone : String
 })

 const userModel = mongoose.model("User", userSchema)
 module.exports = userModel