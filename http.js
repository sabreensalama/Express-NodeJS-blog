const http = require('http')
const server = http.createServer()
server.on('request',(request, response) => 
{
//    response.end("hello ")
//    debugger
if(request.url== '/users' && request.method=="GET")
{
    response.end("listing users")
}else if(request.url =="/users" && request.method=="POST")
{
    response.end("creating")
}
})
server.listen(5000,(err) =>
{
  if (!err)
     return console.log("starte app at port 5000")
  console.log(err)
})