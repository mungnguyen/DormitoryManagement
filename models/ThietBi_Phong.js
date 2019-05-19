module.exports = function(sequelize, DataTypes) {
    var ThietBi_Phong = sequelize.define('ThietBi_Phong', {
        thietBi_PhongId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        soLuongHienCo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        soLuongHuHong: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    },
    {
        timestamps: false
    });

    return ThietBi_Phong;
}