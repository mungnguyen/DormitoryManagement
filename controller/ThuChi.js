db = require('../models');
dateFormat = require('dateformat');
Sequelize = require('sequelize');

var hienThiTatCaHoaDon = function (req, res) {
    db.ThuChi.findAll({
        include: [{
            model: db.HopDong
        },
        {
            model: db.DienNuoc
        }]
    }).then(result => {
        return res.json(result)
    });
}

var themHoaDonHopDong = function (req, res) {
    db.ThuChi.create({
        noiDung: req.body.noiDung,
        tongTien: req.body.tongTien,
        nguoiThucHien: req.body.nguoiThucHien,
        ngayThucHien: req.body.ngayThucHien,
        loaiThuChi: "Thu"
    }).then(result => {
        db.HopDong.update({
            thuChiId: result.thuChiId
        },
            {
                where: {
                    hopDongId: req.body.hopDongId
                }
            }).then(() => {
                return res.json({
                    success: true
                })
            })
    })
}

var themHoaDonDienNuoc = function (req, res) {
    db.ThuChi.create({
        noiDung: req.body.noiDung,
        tongTien: req.body.tongTien,
        nguoiThucHien: req.body.nguoiThucHien,
        ngayThucHien: req.body.ngayThucHien,
        loaiThuChi: "Thu"
    }).then(result => {
        db.DienNuoc.update({
            thuChiId: result.thuChiId
        }, {
                where: {
                    dienNuocId: req.body.dienNuocId
                }
            }).then(() => {
                return res.json({
                    success: true
                })
            })
    })
}

var themHoaDon = function (req, res) {
    db.ThuChi.create({
        noiDung: req.body.noiDung,
        tongTien: req.body.tongTien,
        nguoiThucHien: req.body.nguoiThucHien,
        ngayThucHien: req.body.ngayThucHien,
        loaiThuChi: req.body.loaiThuChi
    }).then(result => {
        return res.json(result)
    })
}

var ThuChi = {};
ThuChi.hienThiTatCaHoaDon = hienThiTatCaHoaDon;
ThuChi.themHoaDonHopDong = themHoaDonHopDong;
ThuChi.themHoaDonDienNuoc = themHoaDonDienNuoc;
ThuChi.themHoaDon = themHoaDon;

module.exports = ThuChi;