db = require('../models');

var hienThiCacKhuNha = function (req, res) {
    db.KhuNha.findAll({}).then(function (result) {
        res.json(result);
    });
}

var timKhuNhaTheoId = function(req, res) {
    db.KhuNha.findOne({ 
        where:
            { khuNhaId: req.params.id }
        }
    ).then(function(result) {
        res.json(result);
    });
}

var themKhuNha = function (req, res) {
    db.KhuNha.create({
        tenKhuNha: req.body.tenKhuNha,
        diaChi: req.body.diaChi,
        quanLyKhuNha: req.body.quanLyKhuNha,
        SDT: req.body.SDT
    }).then(function (result) {
            res.json(result);
    });
}

var suaThongTinKhuNha = function (req, res) {
    db.KhuNha.update({
        tenKhuNha: req.body.tenKhuNha,
        diaChi: req.body.diaChi,
        quanLyKhuNha: req.body.quanLyKhuNha,
        SDT: req.body.SDT
    }, {
        where: {
            khuNhaId: req.body.khuNhaId
        }
    }).then(function (result) {
          res.json(result
            );
    });
}

var xoaKhuNha = function (req, res) {
    db.KhuNha.destroy({
        where: {
            khuNhaId: req.body.khuNhaId
        }
    }).then(function (result) {
        res.json(result);
    });
}

var KhuNha = {}

KhuNha.hienThiCacKhuNha = hienThiCacKhuNha;
KhuNha.timKhuNhaTheoId = timKhuNhaTheoId;
KhuNha.themKhuNha = themKhuNha;
KhuNha.suaThongTinKhuNha = suaThongTinKhuNha;
KhuNha.xoaKhuNha = xoaKhuNha;

module.exports = KhuNha;