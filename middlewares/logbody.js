function logBody(request , response , next ){
    console.log("request body , " , request.body)
    if ( !request.body){
        return next("un defined error ")
    }
    next()


}
module.exports = logBody