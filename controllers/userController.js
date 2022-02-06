
// require the db created in the index file
// const { users } = require('../models/index');
const { where } = require('sequelize/dist');
const db = require('../models/index');

// get the user model
const User = db.Users

const addUser = async (req, res) => {
    console.log("POSTING THIS:", req.body)
    let input_data = {
        name: req.body.name
    };

    const user = await User.create(input_data).catch((err) => {
        console.log("THIS IS THE ERRR", err);
    });

    res.status(200).send(user);
};

const getAllUsers = async (req, res) => {
    let users = await User.findAll({include: db.Holdings});
    res.status(200).send(users);
};

const getOneUser = async (req, res) => {
    let id = req.params.id;

    let user = await User.findOne({where: {id: id}, include: db.Holdings});
    res.status(200).send(user);
};

const updateUser = async (req, res) => {
    let id = req.params.id;

    const user = await User.update(req.body, {where: {id: id}})
    res.status(200).send(user)
};

const deleteUser = async (req, res) => {
    let id = req.params.id;

    await User.destroy({where: {id: id}});
    res.status(200).send(`user with id: ${id} is deleted`)
};

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
};