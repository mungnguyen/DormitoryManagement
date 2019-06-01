module.exports = function(sequelize, DataTypes) {
    var Kho = sequelize.define('Kho', {
        id: {
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

    return Kho;
}