checkDuplicateStudentEmail = (req, res, next) => {
      const db = require('../models');
      // -> Check Email is already in use
      db.SinhVien.findOne({ 
        where: {
          emailSinhVien: req.body.emailSinhVien
        } 
      }).then(function(result) {
        if(result){
          res.status(401).json({
            success: false,
            status: "Email đã tồn tại!"});
          return;
        }
        next();
      });
}

checkDuplicateAdminName = (req, res, next) => {
  const db = require('../models');
  // -> Check Email is already in use
  db.Admin.findOne({ 
    where: {
      tenAdmin: req.body.tenAdmin
    } 
  }).then(function(result) {
    if(result){
      res.json({
        success: false,
        status: "Tên đăng nhập đã tồn tại!"});
      return;
    }
    next();
  });
}

const signUpVerify = {};

signUpVerify.checkDuplicateStudentEmail = checkDuplicateStudentEmail;
signUpVerify.checkDuplicateAdminName = checkDuplicateAdminName;

module.exports = signUpVerify;