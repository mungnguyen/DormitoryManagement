
const authJwt = require('../middleware/verifyToken');
const passport      	= require('passport');
 
module.exports = function(app) {
  const signUpVerify = require('../middleware/signUpVerify');
  const SinhVien = require('../controller/SinhVien');
  const Admin = require('../controller/Admin');

//Admin
  //Usage: Login - arguments: tenAdmin, matKhauAdmin
  app.post('/api/admin/login', Admin.login);
  app.put('/api/admin/suathongtin/:adminId', passport.authenticate('jwt-admin', {session: false}), Admin.suaThongTinAdmin);
  app.get('/api/check', passport.authenticate('jwt-admin', {session: false}), Admin.check);
  app.put('api/admin/doimatkhau', passport.authenticate('jwt-admin', {session: false}), Admin.doiMatKhau);

//SinhVien
  //Usage: SignUp - arguments: tenSinhVien, emailSinhVien, matKhauSinhVien, gioiTinh
  app.post('/api/sinhvien/signup', signUpVerify.checkDuplicateStudentEmail, SinhVien.signUp);
  
  //Usage: Login - arguments: emailSinhVien, matKhauSinhVien
  app.post('/api/sinhvien/login', SinhVien.login);

  //Useage: Sua thong tin ca nhan - arguments: 
      //tenSinhVien, emailSinhVien, matKhauSinhVien, gioiTinh, ngayVao, ngayRa, mucUuTien
    app.put('/api/sinhvien/suathongtin/:sinhVienId', passport.authenticate('jwt-sv', {session:false}), SinhVien.suaThongTinSinhVien);
}
