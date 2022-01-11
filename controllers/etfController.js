// require the db created in index file
const db = require('../models/index');

// get the ETF model
const ETF = db.ETF;

const addETF = async (req, res) => {
    let input_data = {
        name: req.body.name,
        ticker: req.body.ticker,
        price: req.body.price
    }

    const etf = await ETF.create(input_data);
    res.status(200).send(etf);
};

const getAllETFs = async (req, res) => {
    let etfs = await ETF.findAll({});
    res.status(200).send(etfs);
};

const getOneEtf = async (req, res) => {
    let id = req.params.id;

    let etf = await ETF.findOne({where: {id: id}});
    res.status(200).send(etf)
};

// export all the controller functions
module.exports = {
    addETF,
    getAllETFs,
    getOneEtf
}