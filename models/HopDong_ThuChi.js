module.exports = function(sequelize, DataTypes) {
    var HopDong_ThuChi = sequelize.define('HopDong_ThuChi', {
        hopDong_ThuChiId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        soTienDaDong: {
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

    return HopDong_ThuChi;
}