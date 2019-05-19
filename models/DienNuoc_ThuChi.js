module.exports = function(sequelize, DataTypes) {
    var DienNuoc_ThuChi = sequelize.define('DienNuoc_ThuChi', {
        dienNuoc_ThuChiId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
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

    return DienNuoc_ThuChi;
}