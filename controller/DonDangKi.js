db = require('../models');

var hienThiCacDonDangKi = function (req, res) {
    db.DonDangKi.findAll({
        include: [{
            model: db.SinhVien
        },
        {
            model: db.Phong, 
            include: [{
                model: db.KhuNha
            }]
        }]
    }).then(function (result) {
        res.json(result);
    });
}

var timDonDangKiCuaSinhVien = function (req, res) {
    db.DonDangKi.findAll({
        where:
            { sinhVienId: req.user.sinhVienId }
    },
        {
            include: [{
                model: db.SinhVien
            },
            {
                model: db.Phong,
                include: {
                    model: db.KhuNha
                }
            }]
        }
    ).then(function (result) {
        res.json(result);
    });
}

var themDonDangKi = function (req, res) {
    db.DonDangKi.create({
        ngayDangKi: req.body.ngayDangKi,
        sinhVienId: req.user.sinhVienId,
        phongId: req.body.phongId
    }).then(function (result) {
        res.json({
            success: true,
            result: result
        });
    });
}

var suaThongTinDonDangKi = function (req, res) {
    db.DonDangKi.update({
        tinhTrangDangKi: req.body.tinhTrangDangKi
    }, {
            where: {
                donDangKiId: req.params.donDangKiId
            }
        }).then(function (result) {
            res.json(result
            );
        });
}

var DonDangKi = {}

DonDangKi.hienThiCacDonDangKi = hienThiCacDonDangKi;
DonDangKi.timDonDangKiCuaSinhVien = timDonDangKiCuaSinhVien;
DonDangKi.themDonDangKi = themDonDangKi;
DonDangKi.suaThongTinDonDangKi = suaThongTinDonDangKi;

module.exports = DonDangKi;