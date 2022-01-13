
module.exports = (sequelize, DataTypes) => {
    const Holding = sequelize.define('holding', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        numPurchased: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Holding;
}