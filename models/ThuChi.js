module.exports = function(sequelize, DataTypes) {
    var ThuChi = sequelize.define("ThuChi", {
        thuChiId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        noiDung: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tongTien: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nguoiThucHien: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ngayThucHien: {
            type: DataTypes.DATE,
            allowNull: false
        },
        loaiThuChi: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false
    });
    return ThuChi;
}