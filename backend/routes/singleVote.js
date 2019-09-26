const express = require('express');
const singleVote = express.Router();
const votesController = require('../controllers/votes-controller');

singleVote.get('/results/:id', votesController.getVoteResults);

singleVote.delete('/delete/:id', votesController.deleteVote);

singleVote.put('/edit/:id', votesController.editVote);

singleVote.put('/newResponse', votesController.addNewResponse);

singleVote.get('/participated/:id/:user', votesController.checkIfUserParticipated);

singleVote.post('/addNew', votesController.addNewVote);

module.exports = singleVote;
