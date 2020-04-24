const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema(
    {
      firstName: { type: String , required:true , maxlength :20 , minlength :3} ,
      lastName: { type: String , required:true , maxlength :20 , minlength :3} ,
      dob : {type:Date },
      password: { type: String , required:true , minlength :4} ,
      gender : {type:String, enum:['f' ,'m']} ,
      email :{type:String, unique:true} ,
      phone :{ type: String , maxlength :11 , minlength :11, unique :true}

    }
)

// userSchema.pre('save', function(doc ,next){
//   //true if doc is new
//   if(doc.isNew)
//   {
//     const hashedpass =bcrypt.hash(doc.password ,10, (err ,hashedpass)=>{
//       if(!err){
//            doc.password = hashedpass
//            next()
//       }
//       next(err)
//     })
//   }

// })
const userModel = mongoose.model("User" , userSchema)

module.exports =userModel