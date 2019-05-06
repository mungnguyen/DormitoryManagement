module.exports = function(sequelize, DataTypes) {
    var DienNuoc = sequelize.define('DienNuoc', {
        dienNuocId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        thangGhi: {
            type: DataTypes.DATE,
            allowNull: false
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
        chiSoCu: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        chiSoMoi: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false
    });

    return DienNuoc;
}