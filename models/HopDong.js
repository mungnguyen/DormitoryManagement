module.exports = function(sequelize, DataTypes) {
    var HopDong = sequelize.define('HopDong', {
        hopDongId: {
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
        phongId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'Phongs',
                key: 'phongId'
            }
        },
        ngayBatDau: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ngayKetThuc: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        timestamps: false
    });

    return HopDong;
}