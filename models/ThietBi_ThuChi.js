module.exports = function(sequelize, DataTypes) {
    var ThietBi_ThuChi = sequelize.define('ThietBi_ThuChi', {
        thietBi_ThuChiId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        soLuong: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tinhTrangThanhToan: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Chưa thanh toán"
        }
    },
    {
        timestamps: false
    });

    return ThietBi_ThuChi;
}