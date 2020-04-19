// middleware
function log(request , response , next){
    console.log(new Date() , request.method , request.url )
    next()
  }

  module.exports = log