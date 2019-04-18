module.exports = function(sequelize, DataTypes) {
    var khuNha = sequelize.define('khuNha', {
        khuNhaId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        tenKhuNha: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return khuNha;
}