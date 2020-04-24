const express = require('express')
const PostModel =require("../models/posts")
const router = express.Router()


// for posts

router.get('/' , (request , response  ,next) => {
    // handle el request to get data from source 
    // return response
   PostModel.find({}).populate('author').exec((err,posts) =>{
     if(!err){
       response.json(posts)
     }
     next(err)
   })
 
 })
 router.get('/:id' , (request , response) => {
   
   const parameters = request.params
   // const id = parameters.id
   const { id } = parameters
   PostModel.findById( id , function(err, result) {
    if (err) {
      response.send(err);
    } else {
      response.json(result);
    }
  });
 })
 
 router.post('/' , ( request , response  ,next )=>{
   const { title , body , author } = request.body
   const post = new PostModel({ title , body ,author  })
   post.save((err,post)=>{
     if(!err)
     {
       response.json(post)
     }
     response.send(err)
   })
 })
 
 router.patch('/:id' , (req , res , next ) =>{
  const parameters = req.params
  const { id } =parameters
 PostModel.findByIdAndUpdate(id, req.body, {
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
  PostModel.findByIdAndRemove(id, (err, post) => {

    // check if query error
    if (err) {
        console.log(err);
    }

    res.json("your doc deleted")
});
 })

 module.exports = router