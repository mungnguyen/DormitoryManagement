db = require('../models');

var hienThiCacDonRoiKTX = function (req, res) {
    db.DonRoiKTX.findAll({
        include: [{
            model: db.SinhVien,
            include: [{
                model: db.HopDong,
                include: [{
                    model: db.Phong,
                    include: [{
                        model: db.KhuNha
                    }]
                }]
            }]
        }]
    }).then(function (result) {
        res.json(result);
    });
}

var timDonRoiKTXCuaSinhVien = function (req, res) {
    db.DonRoiKTX.findAll({
        where:
            { sinhVienId: req.user.sinhVienId }
    },
        {
            include: [{
                model: db.SinhVien,
                include: [{
                    model: db.HopDong,
                    include: [{
                        model: db.Phong,
                        include: [{
                            model: db.KhuNha
                        }]
                    }]
                }]
            }]
        }
    ).then(function (result) {
        res.json(result);
    });
}

var themDonRoiKTX = function (req, res) {
    db.DonRoiKTX.create({
        ngayVietDon: req.body.ngayVietDon,
        tinhTrangDon: "Đang chờ xử lý"
    }).then(function (result) {
        res.json({
            success: true,
            result: result
        });
    });
}

var suaThongTinDonRoiKTX = function (req, res) {
    db.DonDangKi.update({
        tinhTrangDon: req.body.tinhTrangDon
    }, {
            where: {
                donRoiKTXId: req.params.donRoiKTXId
            }
        }).then(function (result) {
            res.json(result
            );
        });
}

var DonRoiKTX = {}

DonRoiKTX.hienThiCacDonRoiKTX = hienThiCacDonRoiKTX;
DonRoiKTX.timDonRoiKTXCuaSinhVien = timDonRoiKTXCuaSinhVien;
DonRoiKTX.themDonRoiKTX = themDonRoiKTX;
DonRoiKTX.suaThongTinDonRoiKTX = suaThongTinDonRoiKTX;

module.exports = DonRoiKTX;