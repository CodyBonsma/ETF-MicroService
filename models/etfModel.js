module.exports = (sequelize, DataTypes) => {


    const ETF = sequelize.define('ETF', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticker: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return ETF
}



// DOES EXPORT LIKE THIS WORK??
// module.exports = ETF;