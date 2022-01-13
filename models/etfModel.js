
module.exports = (sequelize, DataTypes) => {

const Holding = require('./holdingModel');


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
            type: DataTypes.FLOAT,
            allowNull: false
        },
        assetClass: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        expenseRatio: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        change: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        SEC_yield: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        YTD: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        oneYear: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        fiveYear: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        tenYear: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        sinceInception: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
    });

    

    return ETF
};



// DOES EXPORT LIKE THIS WORK??
// module.exports = ETF;