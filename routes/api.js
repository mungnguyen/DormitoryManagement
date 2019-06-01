
const authJwt = require('../middleware/verifyToken');
const passport      	= require('passport');
 
module.exports = function(app) {
  const signUpVerify = require('../middleware/signUpVerify');
  const SinhVien = require('../controller/SinhVien');
  const Admin = require('../controller/Admin');
  const KhuNha = require('../controller/KhuNha');
  const Phong = require('../controller/Phong');
  const DonDangKi = require('../controller/DonDangKi');
  const HopDong = require('../controller/HopDong');
  const ThuChi = require('../controller/ThuChi');
  const DonRoiKTX = require('../controller/DonRoiKTX');
  const DienNuoc = require('../controller/DienNuoc');
  const ThietBi = require('../controller/ThietBi');

//Admin
  //Usage: Login - arguments: tenAdmin, matKhauAdmin
  app.post('/api/admin/login', Admin.login);
  app.put('/api/admin/suathongtin/:adminId', passport.authenticate('jwt-admin', {session: false}), Admin.suaThongTinAdmin);
  app.get('/api/check', passport.authenticate('jwt-admin', {session: false}), Admin.check);
  app.put('/api/admin/doimatkhau', passport.authenticate('jwt-admin', {session: false}), Admin.doiMatKhau);

  //CRUD Khu Nha
  app.get('/api/hienthicackhunha', KhuNha.hienThiCacKhuNha);
  app.get('/api/admin/hienthikhunhatheoid/:khuNhaId', passport.authenticate('jwt-admin', {session: false}), KhuNha.timKhuNhaTheoId);
  app.post('/api/admin/themkhunha', passport.authenticate('jwt-admin', {session: false}), KhuNha.themKhuNha);
  app.put('/api/admin/suakhunha/:khuNhaId', passport.authenticate('jwt-admin', {session: false}), KhuNha.suaThongTinKhuNha);
  app.delete('/api/admin/xoakhunha/:khuNhaId', passport.authenticate('jwt-admin', {session: false}), KhuNha.xoaKhuNha);

  // CRUD Phong
  app.get('/api/hienthicacphong', Phong.hienThiCacPhong);
  app.get('/api/admin/hienthiphongtheoid/:phongId', passport.authenticate('jwt-admin', {session: false}), Phong.timPhongTheoId);
  app.post('/api/admin/themphong', passport.authenticate('jwt-admin', {session: false}), Phong.themPhong);
  app.put('/api/admin/suaphong/:phongId', passport.authenticate('jwt-admin', {session: false}), Phong.suaThongTinPhong);
  app.delete('/api/admin/xoaphong/:phongId', passport.authenticate('jwt-admin', {session: false}), Phong.xoaPhong);

  //Don dang ki
  app.get('/api/admin/hienthicacdondangki',passport.authenticate('jwt-admin', {session: false}), DonDangKi.hienThiCacDonDangKi);
  app.put('/api/admin/thaydoitinhtrangdon/:donDangKiId', passport.authenticate('jwt-admin', {session: false}), DonDangKi.suaThongTinDonDangKi);
  
  //Hop Dong
  app.get('/api/admin/hienthicachopdong', passport.authenticate('jwt-admin', {session: false}), HopDong.hienThiCacHopDong);
  app.post('/api/admin/taohopdong', passport.authenticate('jwt-admin', {session: false}), HopDong.themHopDong);
  app.put('/api/admin/thaydoitrangthaihopdong/:hopDongId', passport.authenticate('jwt-admin', {session: false}), HopDong.suaThongTinHopDong);

  //Don Roi KTX
  app.get('/api/admin/hienthicacdonroiktx', passport.authenticate('jwt-admin', {session: false}), DonRoiKTX.hienThiCacDonRoiKTX);
  app.put('/api/admin/thaydoitrangthaidonroiktx', passport.authenticate('jwt-admin', {session: false}), DonRoiKTX.suaThongTinDonRoiKTX);

  //Dien Nuoc
  app.get('/api/admin/hienthicachoadondiennuoc', passport.authenticate('jwt-admin', {session: false}), DienNuoc.hienThiCacHoaDonDienNuoc);
  app.post('/api/admin/taodiennuoc', passport.authenticate('jwt-admin', {session: false}), DienNuoc.taoDienNuoc);
  app.put('/api/admin/thaydoitrangthaidiennuoc/:dienNuocId', passport.authenticate('jwt-admin', {session: false}), DienNuoc.suaThongTinDienNuoc);
  
  //Thiet Bi
  app.get('/api/admin/hienthicacthietbi', passport.authenticate('jwt-admin', {session: false}), ThietBi.hienThiCacThietBi);
  app.post('/api/admin/themthietbi', passport.authenticate('jwt-admin', {session: false}), ThietBi.themThietBi);
  app.post('/api/admin/nhapthietbi', passport.authenticate('jwt-admin', {session: false}), ThietBi.nhapThietBi);
  app.post('/api/admin/themthietbivaophong', passport.authenticate('jwt-admin', {session: false}), ThietBi.themThietBiVaoPhong);

  //Thu Chi
  app.get('/api/admin/hienthicachoadon', passport.authenticate('jwt-admin', {session: false}), ThuChi.hienThiTatCaHoaDon);
  app.post('/api/admin/taohoadonhopdong', passport.authenticate('jwt-admin', {session: false}), ThuChi.themHoaDonHopDong);
  app.post('/api/admin/taohoadondiennuoc', passport.authenticate('jwt-admin', {session: false}), ThuChi.themHoaDonDienNuoc);
  app.post('/api/taohoadon', passport.authenticate('jwt-admin', {session: false}), ThuChi.themHoaDon);

//SinhVien
  //Usage: SignUp - arguments: tenSinhVien, emailSinhVien, matKhauSinhVien, gioiTinh
  app.post('/api/sinhvien/signup', signUpVerify.checkDuplicateStudentEmail, SinhVien.signUp);
  
  //Usage: Login - arguments: emailSinhVien, matKhauSinhVien
  app.post('/api/sinhvien/login', SinhVien.login);

  //Useage: Sua thong tin ca nhan - arguments: 
      //tenSinhVien, emailSinhVien, matKhauSinhVien, gioiTinh, ngayVao, ngayRa, mucUuTien
    app.put('/api/sinhvien/suathongtin/:sinhVienId', passport.authenticate('jwt-sv', {session:false}), SinhVien.suaThongTinSinhVien);

  //Dang ki phong
  app.get('/api/sinhvien/hienthidondangkisinhvien', passport.authenticate('jwt-sinhvien', {session: false}), DonDangKi.timDonDangKiCuaSinhVien);
  app.get('/api/sinhvien/kiemtrasinhvienthuocktx', passport.authenticate('jwt-sinhvien', {session: false}), HopDong.kiemTraSinhVienThuocKTX);
  app.post('/api/sinhvien/themdondangki', passport.authenticate('jwt-sinhvien', {session: false}), DonDangKi.themDonDangKi);

  //Roi KTX
  app.get('/api/sinhvien/hienthicacdonroiktx', passport.authenticate('jwt-sinhvien', {session: false}), DonRoiKTX.timDonRoiKTXCuaSinhVien);
  app.post('/api/sinhvien/roiktx', passport.authenticate('jwt-sinhvien', {session: false}), DonRoiKTX.themDonRoiKTX);
  
}
