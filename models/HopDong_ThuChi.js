module.exports = function(sequelize, DataTypes) {
    var HopDong_ThuChi = sequelize.define('HopDong_ThuChi', {
        hopDong_ThuChiId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        hopDongId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'HopDongs',
                key: 'hopDongId'
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
        soTienDaDong: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false
    });

    return HopDong_ThuChi;
}