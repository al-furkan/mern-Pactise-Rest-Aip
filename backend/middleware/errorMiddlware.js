const errorHandaler = (err, req, res,next) =>{
      const statusCode = res.statusCode ? res.statusCoad : 500
      res.status(statusCode);

      res.json({
        message:err.massage,
        stack: process.env.NODE_ENV ==='production' ? null : err.stack
      })

}


module.exports = {
    errorHandaler,
}