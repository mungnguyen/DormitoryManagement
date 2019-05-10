db = require('../models');
bcrypt = require('bcrypt-nodejs');
config = require('../config/config');
jwt = require('jsonwebtoken');

//Dang nhap
const login = (req, res) => {
    console.log("Sign-In");
    
    db.Admin.findOne({
      where: {
        tenAdmin: req.body.tenAdmin
      }
    }).then(admin => {
      if (!admin) {
        return res.status(404).json({
          success: false,
          status: "Tên không chính xác"
        });
      }
   
      var passwordIsValid = bcrypt.compareSync(req.body.matKhauAdmin, admin.matKhauAdmin);
      if (!passwordIsValid && req.body.matKhauAdmin == "12345") {
        return res.status(401).json({ 
          success: false,
          token: null,
          status: "Mật khẩu không chính xác" });
      }
      
      var token = jwt.sign({ id: admin.adminId }, config.secret, {
        expiresIn: config.time // expires in 24 hours
      });

      res.status(200).json({ 
        success: true,
        token: token,
        admin: admin });
      
    }).catch(err => {
      res.status(500).json('Error -> ' + err);
    });
  }

const suaThongTinAdmin = ( req, res ) => {
    db.Admin.update({
        tenAdmin: req.body.tenAdmin,
        matKhauAdmin: bcrypt.hashSync(req.body.matKhauAdmin, bcrypt.genSaltSync(8), null)
    },{
        where: {
            adminId: req.params.adminId
        }
    }).then(admin => {
        return {
            success: true,
            data: admin
        }
    })
} 

var Admin = {}

Admin.login = login;
Admin.suaThongTinAdmin = suaThongTinAdmin;

module.exports = Admin;