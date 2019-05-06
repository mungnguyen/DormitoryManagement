module.exports = function(sequelize, DataTypes) {
    var ThietBi_ThuChi = sequelize.define('ThietBi_ThuChi', {
        thietBi_ThuChiId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        thietBiId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'ThietBis',
                key: 'thietBiId'
            }
        },
        thuChiId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'ThuChis',
                key: 'thuChiId'
            }
        },
        soLuong: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false
    });

    return ThietBi_ThuChi;
}