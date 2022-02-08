// require the db configuration form the dbConfig file
const dbConfig = require("../config/dbConfig");

// require the sequelize constructor and datatypes from the sequelize module
const { Sequelize, DataTypes } = require("sequelize");

// construct the sequelize object using the constructor
let sequelize = null;
if (process && process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: false,
    },
  });
} else {
  sequelize = new Sequelize({
    // use imported configurations from dbConfig
    database: dbConfig.DB,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: false,
    },
  });
}

// authenticate will test the connection with DB and return a promise
sequelize
  .authenticate()
  .then(() => {
    console.log("connected to postgresDB");
  })
  .catch((e) => {
    console.log("unable to connect to postgres DB" + e);
  });

// create a db object to work with the sequelize table
const db = {};

// create an attribute storing the previously created sequelized instance
db.sequelize = sequelize;

// get ETF model
db.ETF = require("./etfModel")(sequelize, DataTypes);
const ETF = require("./etfModel");

db.Holdings = require("./holdingModel")(sequelize, DataTypes);
const Holding = require("./holdingModel");

db.Users = require("./userModel")(sequelize, DataTypes);

// sync the db by running the model
// 'force: false' ensures that the table is not created again everytime the program runs
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB synced with sequelize");
  })
  .catch((err) => {
    console.log("Error syncing the DB to sequelize" + err);
  });

db.Holdings.belongsTo(db.ETF);
db.ETF.hasMany(db.Holdings);

module.exports = db;
