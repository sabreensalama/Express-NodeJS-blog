const express = require('express')
const router = express.Router()


// for posts

router.get('/' , (request , response ) => {
    // handle el request to get data from source 
    // return response
   response.send('posts')
 
 })
 router.get('/:id' , (request , response) => {
   
   const parameters = request.params
   // const id = parameters.id
   const { id } = parameters
   response.send(`listing post with id =  ${ id }`)
 
 
 })
 
 router.post('/' , ( request , response )=>{
 
    response.send("create new object")
 })
 router.patch('/:id' , (request , response ) =>{
   response.send("update instance")
   
 })
 
 
 router.delete('/:id' , (request , response ) =>{
    response.send("delete instance ")
 })

 module.exports = router