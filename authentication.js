const requiredlogin = (req,res,next)=>{
    if (req.session.user) {
        req.session.userstatus = true
        next()
    }else{
      req.session.userstatus = false
      res.redirect('/auths/signup/')
    }
  }
  
  module.exports = requiredlogin;