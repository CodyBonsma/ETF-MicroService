const holdingController = require('../controllers/holdingController');
// const bodyParser = require('body-parser')

// create a Router object from express
const router = require('express').Router()

/////////// holding routes
// add a new holding to the table
router.post('/', holdingController.addHolding);

// access all holdings in the table
router.get('/:id', holdingController.getAllHoldings);

// access one holding by id
router.get('/:id', holdingController.getOneHolding);

// updating a holding record 
router.put('/:id', holdingController.updateHolding);

// delete a holding
router.delete('/:id', holdingController.deleteHolding);

module.exports = router;