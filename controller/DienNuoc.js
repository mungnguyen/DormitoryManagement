db = require('../models');
dateFormat = require('dateformat');
Sequelize = require('sequelize');

var hienThiCacHoaDonDienNuoc = function (req, res) {
    db.DienNuoc.findAll({
        include: [{
            model: db.Phong,
            include: {
                model: db.KhuNha
            }
        }]
    }).then(function (result) {
        res.json(result);
    });
}

var timHoaDonDienNuocCuaPhong = function (req, res) {
    db.HopDong.findAll({
        where:
        {
            sinhVienId: req.user.sinhVienId,
            tinhTrangThanhToan: "Đã thanh toán"
        }
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
        if (result) {
            db.DienNuoc.findAll({
                where: result.Phong.phongId
            },
                {
                    include: [{
                        model: db.Phong,
                        include: {
                            model: db.KhuNha
                        }
                    }]
                }
            ).then(reslt => {
                if (reslt) {
                    return res.json(reslt)
                } else {
                    return res.status(402).json({
                        success: false,
                        message: "Không có hóa đơn điện nước nào"
                    })
                }
            })
        } else {
            return res.status(401).json({
                success: false,
                message: "Bạn không thuộc kí túc xá"
            })
        }
    });
}

var taoDienNuoc = function (req, res) {
    db.DienNuoc.create({
        thangGhi: req.body.thangGhi,
        chiSoMoi: req.body.chiSoMoi,
        chiSoCu: req.body.chiSoCu,
        giaDien: req.body.giaDien,
        phongId: req.body.phongId
    }).then(function (result) {
        res.json(result);
    });
}

var suaThongTinDienNuoc = function (req, res) {
    db.DienNuoc.update({
        tinhTrangThanhToan: req.body.tinhTrangThanhToan
    }, {
            where: {
                dienNuocId: req.params.dienNuocId
            }
        }).then(function (result) {
            res.json(result
            );
        });
}

var DienNuoc = {}

DienNuoc.hienThiCacHoaDonDienNuoc = hienThiCacHoaDonDienNuoc;
DienNuoc.timHoaDonDienNuocCuaPhong = timHoaDonDienNuocCuaPhong;
DienNuoc.taoDienNuoc = taoDienNuoc;
DienNuoc.suaThongTinDienNuoc = suaThongTinDienNuoc;

module.exports = DienNuoc;