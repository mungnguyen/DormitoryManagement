const db = require('../models');
const config = require('../config/config');
const jwt = require('jsonwebtoken');


verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];
    
    if (!token){
      return res.status(403).send({ 
        auth: false, message: 'No token provided.' 
      });
    }
   
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err){
        return res.status(500).send({ 
            auth: false, 
            message: 'Fail to Authentication. Error -> ' + err 
          });
      }
      req.id = decoded.id;
      next();
    });
}

module.exports = verifyToken;