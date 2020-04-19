const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
      firstName: { type: String , required:true , maxlength :20 , minlength :3} ,
      lastName: { type: String , required:true , maxlength :20 , minlength :3} ,
      dob : {type:Date ,required:true},
      password: { type: String , required:true , minlength :8} ,
      gender : {type:String, enum:['f' ,'m']} ,
      email :{type:String, match:/.+@+\..+/ ,unique:true} ,
      phone :{ type: String , required:true , maxlength :11 , minlength :11, unique :true}

    }
)
const userModel = mongoose.model("User" , userSchema)
module.exports =userModel