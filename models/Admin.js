module.exports = function(sequelize, DataTypes) {
    var bcrypt = require('bcrypt-nodejs');
    var Admin = sequelize.define('Admin', {
        adminId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        tenAdmin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hoTen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        matKhauAdmin: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '12345'
        },
    },
    {
        timestamps: false
    });
    
    return Admin;
}