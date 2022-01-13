// require the db configuration form the dbConfig file
const dbConfig = require('../config/dbConfig');

// require the sequelize constructor and datatypes from the sequelize module
const { Sequelize, DataTypes } = require('sequelize');

// construct the sequelize object using the constructor 
const sequelize = new Sequelize({
    database: dbConfig.DB,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
});

// authenticate will test the connection with DB and return a promise
sequelize.authenticate().then(() => {
    console.log('connected to postgresDB')
}).catch((e) => {
    console.log('unable to connect to postgres DB' + e)
});

// create a db object to work with the sequelize table
const db = {};

// create an attribute storing the previously created sequelized instance
db.sequelize = sequelize;

// get ETF model 
db.ETF = require('./etfModel')(sequelize, DataTypes);
db.Holdings = require('./holdingModel')(sequelize, DataTypes);

// sync the db by running the model
// 'force: false' ensures that the table is not created again everytime the program runs
db.sequelize.sync({force: true}).then(() => {
    console.log('DB synced with sequelize')
}).catch((err) => {
    console.log('Error syncing the DB to sequelize' + err)
});

module.exports = db;