const express = require('express')
const UserModel = require("../models/users")
const router = express.Router()


router.use((request , response , next) => {
    console.log('users route')
    next()

})
router.get('/' , (request , response  ,next) => {
  // handle el request to get data from source 
  // return response
 UserModel.find({}).exec((err,users) =>{
   if(!err){
     response.json(users)
   }
   next(err)
 })

})


 router.get('/:id' , (request , response) => {
   
  const parameters = request.params
  // const id = parameters.id
  const { id } = parameters
  UserModel.findById( id , function(err, result) {
   if (err) {
     response.send(err);
   } else {
     response.json(result);
   }
 });
})

 
router.post('/' , ( request , response  ,next )=>{
  const { firstName ,lastName , email ,dob ,password ,gender ,phone } = request.body
  const user = new UserModel(request.body)
  user.save((err,user)=>{
    if(!err)
    {
       response.json(user)
    }
    response.send(err)
   })
})

 router.patch('/:id' , (req , res , next ) =>{
  const parameters = req.params
  const { id } =parameters
 UserModel.findByIdAndUpdate(id, req.body, {
  new: true
},
function(err, model) {
  if (!err) {
      res.status(201).json({
          data: model
      });
  } else {
      res.status(500).json({
          message: "not found any relative data"
      })
  }
});
})
 
router.delete('/:id' , (req , res ) =>{
  const parameters = req.params
  const { id } =parameters
  UserModel.findByIdAndRemove(id, (err, user) => {

    // check if query error
    if (err) {
        console.log(err);
    }

    res.json("your doc deleted")
});
 })

 module.exports = router
 