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

      if(admin.matKhauAdmin != 12345) {
        var passwordIsValid = bcrypt.compareSync(req.body.matKhauAdmin, admin.matKhauAdmin);

        if (!passwordIsValid && req.body.matKhauAdmin == "12345") {
          return res.status(401).json({ 
            success: false,
            token: null,
            status: "Mật khẩu không chính xác" });
        }
      } else {
        if (req.body.matKhauAdmin != "12345") {
          return res.status(401).json({ 
            success: false,
            token: null,
            status: "Mật khẩu không chính xác" 
          });
        }
      }
      
      var token = jwt.sign({ id: admin.adminId }, config.secret, {
        expiresIn: config.time // expires in 24 hours
      });

      res.status(200).json({ 
        success: true,
        token: token,
        data: admin });
      
    }).catch(err => {
      res.status(500).json('Error -> ' + err);
    });
  }

const doiMatKhau = (req, res) => {
  db.Admin.findOne({
    where: {
      adminId: req.user.adminId
    }
  }).then(admin => {
    var passwordIsValid = false;

    if( admin.matKhauAdmin == "12345" ) {
      passwordIsValid = req.matKhauCu == "12345" ? true : false
    } else {
      passwordIsValid = bcrypt.compareSync(req.body.matKhauCu, admin.matKhauAdmin);
    }

    if ( !passwordIsValid ) {
      return res.json({
        success: false,
        message: "Mật khẩu không chính xác"
      });
    } 
    else {
      db.Admin.update({
        matKhauAdmin: req.body.matKhauMoi
      }, {
        where: {
          adminId: admin.adminId
        }
      }).then( result => {
        if ( result == [1] ) {
          return res.json({
            success: true,
            message: "Cập nhật mật khẩu thành công"
          });
        } else {
          return res.json({
            success: false,
            message: "Đã có lỗi xảy ra"
          });
        }
      })
    }
  });
}

const check = ( req, res ) => {
  res.json({
    id: req.user
  })

}

const suaThongTinAdmin = ( req, res ) => {
    db.Admin.update({
        tenAdmin: req.body.tenAdmin,
        matKhauAdmin: bcrypt.hashSync(req.body.matKhauAdmin, bcrypt.genSaltSync(8), null)
    },{
        where: {
            adminId: req.user.adminId
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
Admin.doiMatKhau = doiMatKhau;
Admin.check = check;

module.exports = Admin;