module.exports = function(sequelize, DataTypes) {
    var DonDangKi = sequelize.define('DonDangKi', {
        donDangKiId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        ngayDangKi: {
            type: DataTypes.DATE,
            allowNull: false
        },
        tinhTrangDangKi: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Đang chờ xử lý"
        },
    },
    {
        timestamps: false
    });

    return DonDangKi;
}