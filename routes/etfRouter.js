// import controller functions
const etfController = require('../controllers/etfController');


// create a router object from express
const router = require('express').Router();


/////////// ETF ROUTES
// add a new etf to the table
router.post('/', etfController.addETF);

// access all etfs
router.get('/', etfController.getAllETFs);

// find one etf
router.get('/:id', etfController.getOneEtf);




module.exports = router;