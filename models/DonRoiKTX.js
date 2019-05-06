module.exports = function(sequelize, DataTypes) {
    var DonRoiKTX = sequelize.define('DonRoiKTX', {
        donRoiKTXId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        sinhVienId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'SinhViens',
                key: 'sinhVienId'
            }
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