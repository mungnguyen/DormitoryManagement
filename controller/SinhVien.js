//global variables
db = require('../models');
bcrypt = require('bcrypt-nodejs');
config = require('../config/config');
jwt = require('jsonwebtoken');

//Dang ki
const signUp = function(req, res){
  // Save SinhVien to Database
  console.log("Processing func -> SignUp");
    
  db.SinhVien.create({
      tenSinhVien: req.body.tenSinhVien,
      emailSinhVien: req.body.emailSinhVien,
      matKhauSinhVien: bcrypt.hashSync(req.body.matKhauSinhVien, bcrypt.genSaltSync(8), null),
      gioiTinh: req.body.gioiTinh
    }).then(function(sinhVien){
      var token = jwt.sign({ id: sinhVien.sinhVienId }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.json({
          success: true,
          token: token,
          data: sinhVien
      })
  })
  //   }).catch(err => {
  //     res.status(500).json("Fail! Error -> " + err);
  //   })
}

//Dang nhap
const login = (req, res) => {
  console.log("Sign-In");
  
  db.SinhVien.findOne({
    where: {
      emailSinhVien: req.body.emailSinhVien
    }
  }).then(sinhVien => {
    if (!sinhVien) {
      return res.status(401).json({
        success: false,
        status: "Email không tồn tại"
      });
    }
 
    var passwordIsValid = bcrypt.compareSync(req.body.matKhauSinhVien, sinhVien.matKhauSinhVien);
    if (!passwordIsValid) {
      return res.status(402).json({ 
        success: false,
        token: null,
        status: "Mật khẩu không chính xác" });
    }
    
    var token = jwt.sign({ id: sinhVien.sinhVienId }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    
    res.status(200).json({ 
      success: true,
      token: token,
      data: sinhVien });
    
  }).catch(err => {
    res.status(500).json('Error -> ' + err);
  });
}

//hien thi tat ca cac sinh vien
const hienThiCacSinhVien = (req, res) => {
  db.SinhVien.findAll({}).then(function (result) {
    res.json({
      success: true,
      data: result
    });
  });
}

//Tim sinh vien theo id
var timSinhVienheoId = (req, res) => {
  db.SinhVien.findOne({ 
      where:
          { sinhVienId: req.params.sinhVienId }
      }
  ).then(result => {
      res.json({
        success: true,
        data: result
      });
  });
}

//Them sinh vien
var themSinhVien = (req, res) => {
  db.SinhVien.create({
    tenSinhVien: req.body.tenSinhVien,
    emailSinhVien: req.body.emailSinhVien,
    gioiTinh: req.body.gioiTinh,
    ngayVao: req.body.ngayVao,
    ngayRa: req.body.ngayRa,
    mucUuTien: req.body.mucUuTien
  }).then(function(result){
    res.json({
      success: true,
      data: result
    });
  });
}

//Sua thong tin sinh vien
var suaThongTinSinhVien = (req, res) => {
  db.SinhVien.update({
    tenSinhVien: req.body.tenSinhVien,
    emailSinhVien: req.body.emailSinhVien,
    matKhauSinhVien: bcrypt.hashSync(req.body.matKhauSinhVien, bcrypt.genSaltSync(8), null),
    gioiTinh: req.body.gioiTinh,
    ngayVao: req.body.ngayVao,
    ngayRa: req.body.ngayRa,
    mucUuTien: req.body.mucUuTien
  }, {
      where: {
          sinhVienId: req.params.sinhVienId
      }
  }).then(result => {
      res.json({
        success: true,
        data: result
      });
  });
}

//Xoa sinh vien
var xoaSinhVien = (req, res) => {
  db.SinhVien.destroy({
      where: {
          sinhVienId: req.params.sinhVienId
      }
  }).then(result => {
      res.json({
        success: true,
        data: result
      });
  });
}

const SinhVien = {}

SinhVien.signUp = signUp;
SinhVien.login = login;
SinhVien.hienThiCacSinhVien = hienThiCacSinhVien;
SinhVien.timSinhVienheoId = timSinhVienheoId;
SinhVien.themSinhVien = themSinhVien;
SinhVien.suaThongTinSinhVien = suaThongTinSinhVien;
SinhVien.xoaSinhVien = xoaSinhVien;

module.exports = SinhVien;