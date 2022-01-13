
// require the db created in the index file
// const { Holdings } = require('../models/index');
const db = require('../models/index');

// get the holding model
const Holding = db.Holdings

const addHolding = async (req, res) => {
    console.log("POSTING THIS:", req.body)
    let input_data = {
        numPurchased: req.body.numPurchased
    };

    const holding = await Holding.create(input_data).catch((err) => {
        console.log("THIS IS THE ERRR", err);
    });

    res.status(200).send(holding);
};

const getAllHoldings = async (req, res) => {
    let holdings = await Holding.findAll({include: db.ETF});
    res.status(200).send(holdings);
};

const getOneHolding = async (req, res) => {
    let id = req.params.id;

    let holding = await Holding.findOne({where: {id: id}, include: db.ETF});
    res.status(200).send(holding);
};

const updateHolding = async (req, res) => {
    let id = req.params.id;

    const holding = await Holding.update(req.body, {where: {id: id}})
    res.status(200).send(holding)
};

const deleteHolding = async (req, res) => {
    let id = req.params.id;

    await Holding.destroy({where: {id: id}});
    res.status(200).send(`holding with id: ${id} is deleted`)
};

module.exports = {
    addHolding,
    getAllHoldings,
    getOneHolding,
    updateHolding,
    deleteHolding
};