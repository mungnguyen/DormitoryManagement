db = require('../models');
dateFormat = require('dateformat');
Sequelize = require('sequelize');

var hienThiCacThietBi = function (req, res) {
    db.ThietBi.findAll({
        include: [{
            model: db.ThieBi_Phong,
            include: {
                model: db.Phong,
                include: model.KhuNha
            }
        }]
    },
        {
            include: [{
                model: db.Kho
            }]
        }).then(function (result) {
            res.json(result);
        });
}

var themThietBi = function (req, res) {
    db.ThietBi.create({
        tenThietBi: req.body.tenThietBi,
        giaTri: req.body.giaTri
    }).then(function (result) {
        res.json(result);
    });
}

var nhapThietBi = function (req, res) {
    db.ThietBi.findOne({
        where: {
            thietBiId: req.thietBiId
        }
    }).then(result => {
        db.ThuChi.create({
            noiDung: "Nhập thiết bị",
            tongTien: req.body.soLuong * result.giaTien,
            nguoiThucHien: req.body.nguoiThucHien,
            ngayThucHien: req.body.ngayThucHien,
            loaiThuChi: "Chi"
        }).then(reslt => {
            db.ThieBi_ThuChi.create({
                thuChiId: reslt.thuChiId,
                thietBiId: req.body.thietBiId,
                soLuong: req.body.soLuong
            })
        })

        db.Kho.findOne({
            where: {
                thietBiId: req.thietBiId
            }
        }).then(result => {
            if (result) {
                db.Kho.update({
                    soLuongHienCo: result.soLuongHienCo + req.body.soLuong
                },
                    {
                        where: {
                            id: result.id
                        }
                    }).then(() => {
                        return res.json({
                            success: true
                        })
                    })
            } else {
                db.Kho.create({
                    soLuongHienCo: req.body.soLuong
                }).then(() => {
                    return res.json({
                        success: true
                    })
                })
            }
        })
    })
}

var themThietBiVaoPhong = function (req, res) {
    db.Kho.findOne({
        where: {
            thietBiId: req.body.thietBiId
        }
    }).then(result => {
        if (!result) {
            return res.status(401).json({
                message: "Không có thiết bị này trong kho"
            })
        } else {
            db.ThieBi_Phong.findOne({
                where: {
                    thietBiId: req.thietBiId
                }
            }).then(result => {
                if (result) {
                    db.ThieBi_Phong.update({
                        soLuongHienCo: result.soLuongHienCo + req.body.soLuong
                    },
                        {
                            where: {
                                thietBi_PhongId: result.thietBi_PhongId
                            }
                        }).then(() => {
                            return res.json({
                                success: true
                            })
                        })
                } else {
                    db.ThieBi_Phong.create({
                        soLuongHienCo: req.body.soLuong
                    }).then(() => {
                        return res.json({
                            success: true
                        })
                    })
                }
            })
        }
    })
}

var ThietBi = {}

ThietBi.hienThiCacThietBi = hienThiCacThietBi;
ThietBi.themThietBi = themThietBi;
ThietBi.nhapThietBi = nhapThietBi;
ThietBi.themThietBiVaoPhong = themThietBiVaoPhong;

module.exports = ThietBi;