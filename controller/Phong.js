db = require('../models');

var hienThiCacPhong = function (req, res) {
    db.Phong.findAll({
        include: [{
            model: db.KhuNha
        }]
    }).then(result => {
        res.json({
            success: true,
            data: result
        })
    })
}

var timPhongTheoId = function (req, res) {
    db.Phong.findOne({
        where: {
            phongId: req.params.phongId
        },
        include: [{
            model: db.KhuNha
        }]
    }).then(result => {
        res.json({
            success: true,
            data: result
        })
    })
}

var themPhong = function (req, res) {
    db.Phong.create({
        tenPhong: req.body.tenPhong,
        loaiPhong: req.body.loaiPhong,
        soSinhVienMax: req.body.soSinhVienMax,
        khuNhaId: req.body.khuNhaId
    }).then(function (result) {
            res.json(result);
    });
}

var suaThongTinPhong = function (req, res) {
    db.Phong.update({
        tenPhong: req.body.tenPhong,
        loaiPhong: req.body.loaiPhong,
        soSinhVienMax: req.body.soSinhVienMax,
        soSinhVien: req.body.soSinhVien,
        khuNhaId: req.body.khuNhaId
    }, {
        where: {
            phongId: req.params.phongId
        }
    }).then(function (result) {
          res.json(result
            );
    });
}

var xoaPhong = function (req, res) {
    db.Phong.destroy({
        where: {
            phongId: req.params.phongId
        }
    }).then(function (result) {
        res.json(result);
    });
}



var Phong = {};
Phong.hienThiCacPhong = hienThiCacPhong;
Phong.timPhongTheoId = timPhongTheoId;
Phong.themPhong = themPhong;
Phong.suaThongTinPhong = suaThongTinPhong;
Phong.xoaPhong = xoaPhong;

module.exports = Phong;