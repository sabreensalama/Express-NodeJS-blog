const express = require('express')
const UserModel = require("../models/users")
const router = express.Router()


router.use((request , response , next) => {
    console.log('users route')
    next()

})
router.get('/' , (request , response ,next) => {
    // handle el request to get data from source 
    // return response
    UserModel.find({} , (err,users) =>{
      if(!err) {
        return response.json(users)
      }
      next(err)


    })
  //  response.send('users')
 
 })
 router.get('/:id' , (request , response) => {
   
   const parameters = request.params
   // const id = parameters.id
   const { id } = parameters
   response.send(`listing user with id =  ${ id }`)
 
 
 })
 
 router.post('/' , ( request , response , next )=>{
  const { firstName , lastName , password , dob ,phone , email ,gender } =request.body
  const user =  new UserModel({
    firstName , lastName , password, dob , email , gender, phone
  })
  user.save( (err, user)=>{
    if(!err)
    {
      return response.json(user)
    }
    next(err)
  })
 })
 router.patch('/:id' , (request , response ) =>{
   response.send("update instance")
   
 })
 
 router.delete('/:id' , (request , response ) =>{
    response.send("delete instance ")
 })

 module.exports = router
 