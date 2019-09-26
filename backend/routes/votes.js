const express = require('express');
const votes = express.Router();
const votesController = require('../controllers/votes-controller');

votes.get('/:id', votesController.getVotes);

module.exports = votes;

