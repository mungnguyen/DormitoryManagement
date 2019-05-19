
const authJwt = require('../middleware/verifyToken');
const passport      	= require('passport');
 
module.exports = function(app) {
  const signUpVerify = require('../middleware/signUpVerify');
  const SinhVien = require('../controller/SinhVien');
  const Admin = require('../controller/Admin');
  const KhuNha = require('../controller/KhuNha');
  const Phong = require('../controller/Phong')

//Admin
  //Usage: Login - arguments: tenAdmin, matKhauAdmin
  app.post('/api/admin/login', Admin.login);
  app.put('/api/admin/suathongtin/:adminId', passport.authenticate('jwt-admin', {session: false}), Admin.suaThongTinAdmin);
  app.get('/api/check', passport.authenticate('jwt-admin', {session: false}), Admin.check);
  app.put('/api/admin/doimatkhau', passport.authenticate('jwt-admin', {session: false}), Admin.doiMatKhau);

//CRUD Khu Nha
  app.get('/api/admin/hienthicackhunha', passport.authenticate('jwt-admin', {session: false}), KhuNha.hienThiCacKhuNha);
  app.get('/api/admin/hienthikhunhatheoid/:khuNhaId', passport.authenticate('jwt-admin', {session: false}), KhuNha.timKhuNhaTheoId);
  app.post('/api/admin/themkhunha', passport.authenticate('jwt-admin', {session: false}), KhuNha.themKhuNha);
  app.put('/api/admin/suakhunha/:khuNhaId', passport.authenticate('jwt-admin', {session: false}), KhuNha.suaThongTinKhuNha);
  app.delete('/api/admin/xoakhunha/:khuNhaId', passport.authenticate('jwt-admin', {session: false}), KhuNha.xoaKhuNha);

// CRUD Phong
  app.get('/api/admin/hienthicacphong', passport.authenticate('jwt-admin', {session: false}), Phong.hienThiCacPhong);
  app.get('/api/admin/hienthiphongtheoid/:phongId', passport.authenticate('jwt-admin', {session: false}), Phong.timPhongTheoId);
  app.post('/api/admin/themphong', passport.authenticate('jwt-admin', {session: false}), Phong.themPhong);
  app.put('/api/admin/suaphong/:phongId', passport.authenticate('jwt-admin', {session: false}), Phong.suaThongTinPhong);
  app.delete('/api/admin/xoaphong/:phongId', passport.authenticate('jwt-admin', {session: false}), Phong.xoaPhong);

//SinhVien
  //Usage: SignUp - arguments: tenSinhVien, emailSinhVien, matKhauSinhVien, gioiTinh
  app.post('/api/sinhvien/signup', signUpVerify.checkDuplicateStudentEmail, SinhVien.signUp);
  
  //Usage: Login - arguments: emailSinhVien, matKhauSinhVien
  app.post('/api/sinhvien/login', SinhVien.login);

  //Useage: Sua thong tin ca nhan - arguments: 
      //tenSinhVien, emailSinhVien, matKhauSinhVien, gioiTinh, ngayVao, ngayRa, mucUuTien
    app.put('/api/sinhvien/suathongtin/:sinhVienId', passport.authenticate('jwt-sv', {session:false}), SinhVien.suaThongTinSinhVien);
}
