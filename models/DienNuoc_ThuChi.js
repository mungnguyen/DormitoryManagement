module.exports = function(sequelize, DataTypes) {
    var DienNuoc_ThuChi = sequelize.define('DienNuoc_ThuChi', {
        dienNuoc_ThuChiId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        dienNuocId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'DienNuocs',
                key: 'dienNuocId'
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
        giaDien: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false
    });

    return DienNuoc_ThuChi;
}