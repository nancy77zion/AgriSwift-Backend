
const express = require('express');
const verifyToken = require('../middlewares/verifyToken.js');
const { updateUser, getUser, deleteUser } = require('../controllers/User.controller.js');

const routerManager = express.Router();

routerManager.get('/user/:id', verifyToken, getUser)
routerManager.patch('/update/:id', verifyToken, updateUser)
routerManager.delete('/delete/:id', verifyToken, deleteUser)


module.exports = routerManager;