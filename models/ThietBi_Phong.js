module.exports = function(sequelize, DataTypes) {
    var ThietBi_Phong = sequelize.define('ThietBi_Phong', {
        thietBi_PhongId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        thietBiId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: "ThietBis",
                key: "ThietBiId"
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