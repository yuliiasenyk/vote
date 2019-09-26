const logger = require('../config/winston');
const Vote = require('../models/vote');

const votesController = {};

votesController.getVotes  = async function(req, res) {
  let body = {req: req, res: res};
  body.perPage = 4;
  body.page = +req.params.id;
  body.skipping = body.perPage * body.page - body.perPage;
  await votesHelper.getPageWithVotes(body);
}

votesController.addNewVote = async function(req, res) {
  let body = {req: req, res: res};
  body.data = req.body;
  body.options = body.data.options[0];
  await votesHelper.createVote(body);
}

votesController.addNewResponse = async function(req, res) {
  let body = {req: req, res: res};
  body.voteName = req.body.participatedVote;
  body.user = req.body.user;
  body.choice = req.body.choice;
  logger.verbose(`addNewResponse to the vote: ${JSON.stringify(req.body)}`);
  await votesHelper.updateVoteResults(body);
}

votesController.editVote = async function(req, res) {
  let body = {req: req, res: res};
  body.voteName = req.params.id;
  body.data = req.body;
  await votesHelper.editAndUpdate(body);
}

votesController.deleteVote = function(req, res) {
  let name = req.params.id;
  Vote.deleteOne({name: name}, (err, vote) => {
    if(err) res.status(500).json({error: 'could not delete vote'});
    return res.status(200).json({message: 'vote is deleted'});
  })
}

votesController.getVoteResults = function(req, res){
  let name = req.params.id;
  Vote.findOne({name: name}, (err, vote) => {
    if(err) res.status(500).json({error: 'could not find vote results'});
    return res.status(200).json(vote.results);
  })
}

votesController.checkIfUserParticipated = async function(req, res) {
  let body = {req: req, res: res};
  body.vote = req.params.id;
  body.user = req.params.user;
  await votesHelper.checkVoteParticipants(body);
}

const votesHelper = {
  getPageWithVotes(body) {
    Vote.find().countDocuments({}, (err, number) => {
      logger.verbose(`Number of pages: ${number}`);
      body.totalPages = Math.ceil(number / body.perPage);
      logger.verbose(`skipping: ${body.skipping}`);
      Vote.find({}).skip(body.skipping).limit(body.perPage).exec((err, user) => {
        if (err) logger.error('didnt find votes in DB');
        return body.res.status(200).json({data: user, pageData: {page: body.page, totalPages: body.totalPages}});
      })
    })
  },
  checkVoteParticipants(body) {
    Vote.findOne({name: body.vote}, (error, voteFound) => {
      if (error) {
        logger.error('error with finding vote');
        return body.res.status(500);
      }
      voteFound.participants.includes(body.user) ? body.res.status(200).send(true) : body.res.status(200).send(false);
    })
  },
  editAndUpdate(body) {
    Vote.findOneAndUpdate({name: body.voteName},
      {$set: {name: body.data.name, description: body.data.description, options: body.data.options[0]}},
      {new: true}, (err, editedVote) => {
        if (err) {
          logger.error('could not edit vote');
          return body.res.status(500);
        }
        return body.res.status(200).json(editedVote);
      })
  },
  updateVoteResults(body) {
    Vote.findOne({name: body.voteName}, (err, vote) => {
      logger.verbose(vote.results);
      if (!vote.results[body.choice]) {
        vote.results[body.choice] = 1
      } else {
        vote.results[body.choice] += 1
      }
      vote.participants.push(body.user);
      vote.markModified('results');
      vote.save( (error, vote) => {
        if (error) {
          logger.error('error with addNewResponse');
          return body.res.status(500);
        }
        return body.res.status(200).json(vote.results)
      })
    })
  },
  createVote(body) {
    const today = new Date();
    Vote.create({
      name: body.data.name,
      description: body.data.description,
      options: body.options,
      state: 'active',
      results: {},
      start: today.toLocaleDateString(),
      end: (new Date(today.setMonth(today.getMonth()+1))).toLocaleDateString(),
      participants: [],
    }, (err, newlyCreatedVote) => {
      if (err) logger.error('couldnt save new vote');
      newlyCreatedVote.save();
      return body.res.status(200).json(newlyCreatedVote);
    })
  }
};

module.exports = votesController;

