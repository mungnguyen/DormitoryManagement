module.exports = function(sequelize, DataTypes) {
    var DonDangKi = sequelize.define('DonDangKi', {
        donDangKiId: {
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