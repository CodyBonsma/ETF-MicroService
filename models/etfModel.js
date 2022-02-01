
module.exports = (sequelize, DataTypes) => {

// const Holding = require('./holdingModel');


    const ETF = sequelize.define('ETF', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fund_symbol: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fund_long_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fund_category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fund_family: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        exchange_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        exchange_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        avg_vol_3month: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        avg_vol_10day: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        total_net_assets: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        day50_moving_average: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        week52_high: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        week52_high_change: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        week52_high_change_perc: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        week52_low: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        week52_low_change: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        week52_low_change_perc: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        investment_strategy: {
            type: DataTypes.STRING(10000),
            allowNull: true,
        },
        fund_yield: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        inception_date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fund_annual_report_net_expense_ratio: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        top10_holdings_total_assets: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        fund_return_ytd: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        category_return_ytd: {
            type: DataTypes.FLOAT,
            allowNull: true,
        }
    });

    

    return ETF
};



// DOES EXPORT LIKE THIS WORK??
// module.exports = ETF;