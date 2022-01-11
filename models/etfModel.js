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
        },
        assetClass: {
            type: DataTypes.INTEGER,
            allowNull: true
        }, 
        expenseRatio: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        change: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        SEC_yield: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        YTD: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        oneYear: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        fiveYear: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        tenYear: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        sinceInception: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    return ETF
};



// DOES EXPORT LIKE THIS WORK??
// module.exports = ETF;