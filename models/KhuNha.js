module.exports = function(sequelize, DataTypes) {
    var KhuNha = sequelize.define('KhuNha', {
        khuNhaId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        tenKhuNha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        diaChi:{
            type: DataTypes.STRING,
            allowNull: false
        },
        quanLyKhuNha: {
            type: DataTypes.STRING,
            allowNull:false
        },
        SDT: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    });

    return KhuNha;
}