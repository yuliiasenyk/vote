const express = require('express');
const users = express.Router();
const usersController = require('../controllers/users-controller');


users.get('/:id', usersController.getUsers);

users.get('/statistic/:id', usersController.getUserStatistic);

users.put('/status/:id', usersController.changeStatus);

users.put('/permissions/:id', usersController.changePermissions);

users.put('/password/:id', usersController.changePassword);

users.put('/onVote', usersController.addVote);


module.exports = users;
