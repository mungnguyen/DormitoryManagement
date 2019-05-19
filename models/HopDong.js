module.exports = function(sequelize, DataTypes) {
    var HopDong = sequelize.define('HopDong', {
        hopDongId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        ngayBatDau: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ngayKetThuc: {
            type: DataTypes.DATE,
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

    return HopDong;
}