module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
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

  
    return User;
}
