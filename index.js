const express = require('express')
const logmiddle = require('./middlewares/log.js')
const logbody = require('./middlewares/logbody.js')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users.js')
const postsRoutes = require('./routes/posts.js')

mongoose.connect("mongodb://localhost:27017/blog-post" ,
  { useUnifiedTopology: true ,
    useNewUrlParser: true
  },
  (err) =>
{
  if (!err){
    console.log("started connection with mongodb")
  }
  console.log(err)
})
const app = express()


app.use(express.json())
app.use(express.static('public'))
app.use(logmiddle)

app.use(logbody)
app.use('/users',userRoutes)
app.use('/posts',postsRoutes)

// app.use((err,request ,response , next) =>{
//   response.send(err)

// })



app.listen(5000,(err) =>
{
  if (!err)
     return console.log("starte app at port 5000")
  console.log(err)
})