module.exports = function(sequelize, DataTypes) {
    var Phong = sequelize.define('Phong', {
        phongId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        tenPhong: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loaiPhong: {
            type: DataTypes.STRING,
            allowNull: false
        },
        soSinhVienMax: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 8
        },
        tinhTrangPhong: {
            type: DataTypes.STRING,
            allowNull: false
        },
        khuNhaId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'KhuNhas',
                key: 'khuNhaId'
            }
        },
    },
    {
        timestamps: false
    });

    return Phong;
}