module.exports = function(sequelize, DataTypes) {
    var SinhVien= sequelize.define('SinhVien', {
        sinhVienId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        tenSinhVien: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailSinhVien: {
            type: DataTypes.STRING,
            allowNull: false
        },
        matKhauSinhVien: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '12345'
        },
        gioiTinh: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ngayVao: {
            type: DataTypes.DATE
        },
        ngayRa: {
            type: DataTypes.DATE
        },
        mucUutien: {
            type: DataTypes.INTEGER,
            defaultValue: '0'
        },
    },
    {
        timestamps: false
    });

    return SinhVien
}