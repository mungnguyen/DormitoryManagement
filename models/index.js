'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//Association
  //KhuNha - Phong
  db.KhuNha.hasMany(db.Phong, { foreignKey: {name:'khuNhaId', allowNull: false} });
  db.Phong.belongsTo(db.KhuNha, { foreignKey: {name:'khuNhaId', allowNull: false} });

  //Sinh Vien - Don Dang Ky
  db.SinhVien.hasMany(db.DonDangKi, { foreignKey: {name:'sinhVienId', allowNull: false} });
  db.DonDangKi.belongsTo(db.SinhVien, { foreignKey: {name:'sinhVienId', allowNull: false} });

  //Phong - Don Dang Ky
  db.Phong.hasMany(db.DonDangKi, { foreignKey: {name:'phongId', allowNull: false} });
  db.DonDangKi.belongsTo(db.Phong, { foreignKey: {name:'phongId', allowNull: false} });

  //Sinh Vien - Don Roi KTX
  db.SinhVien.hasMany(db.DonRoiKTX, { foreignKey: {name:'sinhVienId', allowNull: false} });
  db.DonRoiKTX.belongsTo(db.SinhVien, { foreignKey: {name:'sinhVienId', allowNull: false} });

  // //Sinh Vien - Hop Dong
  db.SinhVien.hasMany(db.HopDong, { foreignKey: {name:'sinhVienId', allowNull: false} });
  db.HopDong.belongsTo(db.SinhVien, { foreignKey: {name:'sinhVienId', allowNull: false} });
  
  // //Phong - Hop Dong
  db.Phong.hasMany(db.HopDong, { foreignKey: {name:'phongId', allowNull: false} });
  db.HopDong.belongsTo(db.Phong, { foreignKey: {name:'phongId', allowNull: false} });

  //Hop Dong - ThuChi
  db.ThuChi.hasOne(db.HopDong, { foreignKey: {name:'thuChiId'} });
  db.HopDong.belongsTo(db.ThuChi, { foreignKey: {name:'thuChiId'} });

  //Phong - Dien Nuoc
  db.Phong.hasMany(db.DienNuoc, { foreignKey: {name:'phongId', allowNull: false} });
  db.DienNuoc.belongsTo(db.Phong, { foreignKey: {name:'phongId', allowNull: false} });

  //Dien Nuoc - Thu Chi
  db.ThuChi.hasOne(db.DienNuoc, { foreignKey: {name:'thuChiId'} });
  db.DienNuoc.belongsTo(db.ThuChi, { foreignKey: {name:'thuChiId'} });

  //Phong - ThietBi_Phong
  db.Phong.hasMany(db.ThietBi_Phong, { foreignKey: {name:'phongId', allowNull: false} });
  db.ThietBi_Phong.belongsTo(db.Phong, { foreignKey: {name:'phongId', allowNull: false} });

  // //Thiet Bi - ThietBi_Phong
  db.ThietBi.hasMany(db.ThietBi_Phong, { foreignKey: {name:'thietBiId', allowNull: false} });
  db.ThietBi_Phong.belongsTo(db.ThietBi, { foreignKey: {name:'thietBiId', allowNull: false} });

  //ThietBi_ThuChi - Thu Chi
  db.ThuChi.hasOne(db.ThietBi, { foreignKey: {name:'thuChiId'} });
  db.ThietBi_ThuChi.belongsTo(db.ThuChi, { foreignKey: {name:'thuChiId'} });

  // //ThietBi - ThietBi_ThuChi
  db.ThietBi.hasMany(db.ThietBi_ThuChi, { foreignKey: {name:'thietBiId', allowNull: false} });
  db.ThietBi_ThuChi.belongsTo(db.ThietBi, { foreignKey: {name:'thietBiId', allowNull: false} });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
