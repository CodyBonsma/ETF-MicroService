const userController = require('../controllers/userController');
// const bodyParser = require('body-parser')

// create a Router object from express
const router = require('express').Router()

/////////// user routes
// add a new user to the table
router.post('/', userController.addUser);

// access all users in the table
router.get('/', userController.getAllUsers);

// access one user by id
router.get('/:id', userController.getOneUser);

// updating a user record 
router.put('/:id', userController.updateUser);

// delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;