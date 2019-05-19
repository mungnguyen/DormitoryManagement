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
        chiSoCu: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        chiSoMoi: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        giaDien: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tinhTrangThanhToan: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Chưa thanh toán"
        }
    },
    {
        timestamps: false
    });

    return DienNuoc;
}