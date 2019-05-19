module.exports = function(sequelize, DataTypes) {
    var DonRoiKTX = sequelize.define('DonRoiKTX', {
        donRoiKTXId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        ngayVietDon: {
            type: DataTypes.DATE,
            allowNull: false
        },
        tinhTrangDon: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Đang chờ xử lý"
        },
    },
    {
        timestamps: false
    });

    return DonRoiKTX;
}