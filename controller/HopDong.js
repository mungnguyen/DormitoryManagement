db = require('../models');
dateFormat = require('dateformat');
Sequelize = require('sequelize');

var hienThiCacHopDong = function (req, res) {
    db.HopDong.findAll({
        include: [{
            model: db.SinhVien
        },
        {
            model: db.Phong,
            include: {
                model: db.KhuNha
            }
        }]
    }).then(function (result) {
        res.json(result);
    });
}

var timHopDongCuaSinhVien = function (req, res) {
    db.HopDong.findAll({
        where:
            { sinhVienId: req.user.sinhVienId }
    },
        {
            include: [{
                model: db.SinhVien
            },
            {
                model: db.Phong,
                include:  {
                    model: db.KhuNha
                }
            }]
        }
    ).then(function (result) {
        res.json(result);
    });
}

var kiemTraSinhVienThuocKTX = function (req, res) {
    const Op = Sequelize.Op;
    var now = dateFormat(new Date(), "yyyy/mm/dd");
    db.HopDong.findOne({
        sinhVienId: req.user.sinhVienId,
        ngayKetThuc: {
            [Op.le]: now
        }
    }).then(result => {
        if (result) {
            return res.json({
                hasSV: true
            })
        } else {
            db.DonDangKi.findOne({
                where: {
                    sinhVienId: req.user.sinhVienId,
                    tinhTrangDangKi: "Đang chờ xử lý"
                }
            }).then(result => {
                if (result) {
                    return res.status(401).json({
                        hasSV: true
                    })
                } else {
                    return res.status(402).json({
                        hasSV: false
                    })
                }
            })
        }
    })
}

var themHopDong = function (req, res) {
    db.HopDong.create({
        ngayBatDau: req.body.ngayBatDau,
        ngayKetThuc: req.body.ngayKetThuc,
        tongSoTien: req.body.tongSoTien,
        sinhVienId: req.body.sinhVienId,
        phongId: req.body.phongId
    }).then(function (result) {
        res.json(result);
    });
}

var suaThongTinHopDong = function (req, res) {
    db.HopDong.update({
        tinhTrangThanhToan: req.body.tinhTrangThanhToan
    }, {
            where: {
                hopDongId: req.params.hopDongId
            }
        }).then(function (result) {
            res.json(result
            );
        });
}

var HopDong = {}

HopDong.hienThiCacHopDong = hienThiCacHopDong;
HopDong.timHopDongCuaSinhVien = timHopDongCuaSinhVien;
HopDong.suaThongTinHopDong = suaThongTinHopDong;
HopDong.kiemTraSinhVienThuocKTX = kiemTraSinhVienThuocKTX;
HopDong.themHopDong = themHopDong;

module.exports = HopDong;