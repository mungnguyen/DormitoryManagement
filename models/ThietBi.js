module.exports = function(sequelize, DataTypes) {
    var ThietBi = sequelize.define('ThietBi', {
        thietBiId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        tenThietBi: {
            type: DataTypes.STRING,
            allowNull: false
        },
        giaTri: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false
    });

    return ThietBi;
}