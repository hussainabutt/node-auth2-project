const router = require("express").Router();
const { compareSync } = require("bcryptjs");
const jwt = require('jsonwebtoken');
const Users = require("./users-model.js");


module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    

  //  if ( (req.session && req.session.user) || (!token)){
   //     next()
 //   }else {
  //     return res.status(401).json({message: 'Unauthorized'})
  //  }


jwt.verify(token, process.env.secret, (err, decoded) => {
    
    if(err) {
        console.log('decoded error->', err)
      return res.status(401).json({message: 'token bad'});
    }
    //console.log('decoded token ->', decoded);
    next();

})
}
