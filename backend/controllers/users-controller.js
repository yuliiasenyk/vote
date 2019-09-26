const User = require('.././models/user');
const logger = require('../config/winston');

const usersController = {};

usersController.addVote = async function(req, res) {
  logger.verbose(`addVote to user stat: ${JSON.stringify(req.body)}`);
  let body = req.body;
  body.res = res;
  body.result = {[body.participatedVote]: body.choice}
  await usersHelper.updateUserStat(body);
}

usersController.getUserStatistic = async function(req, res){
  logger.verbose(`getUserStatistic PARAMS: ${req.params}`);
  let body = {req: req, res: res};
  body.user = req.params.id;
  await usersHelper.fetchStats(body);
}

usersController.changePassword = async function(req, res) {
  logger.verbose(`changePassword PARAMS in server: ${req.params.id}`);
  logger.verbose(`new password from body: ${req.body.newPass}`);
  logger.verbose(`old password from body: ${req.body.oldPass}`);
  let body = {req: req, res: res};
  body.newPass = req.body.newPass;
  body.oldPass = req.body.oldPass;
  body.username = req.params.id;
  await usersHelper.changePassword(body);
}

usersController.changePermissions = async function(req, res) {
  let body = {req: req, res: res};
  body.username = req.params.id;
  body.newPermission = req.body.newPermission;
  if (body.newPermission === 3) {
    await usersHelper.setPermission3(body);
  } else {
    await usersHelper.setPermission1or2(body);
  }
}

usersController.changeStatus = async function(req, res){
  let body = {req: req, res: res};
  body.username = req.params.id;
  body.newStatus = req.body.newStatus;
  logger.info(`changeStatus PARAMS user: ${body.username}`);
  logger.info(`changeStatus BODY status: ${body.newStatus}`);
  if (body.newStatus === 'active') {
    await usersHelper.setActiveStatus(body);
  } else {
    await usersHelper.setNotActiveStatus(body);
  }
}

usersController.getUsers = async function(req, res) {
  let body = {req: req, res: res};
  body.perPage = 4;
  body.page = +req.params.id;
  body.skipping = body.perPage * body.page - body.perPage;
  await usersHelper.getPageWithUsers(body);
}

const usersHelper = {
  async getPageWithUsers(body) {
    User.find().countDocuments({}, (err, number) => {
      logger.verbose(`Number of pages: ${number}`);
      body.totalPages = Math.ceil(number / body.perPage);
      logger.verbose(`skipping in getPageWithUsers pages: ${body.skipping}`);
      logger.verbose(`totalPages in getPageWithUsers pages: ${body.totalPages}`);
      User.find({}).skip(body.skipping).limit(body.perPage).exec((err, user) => {
        if (err) logger.error('didnt find users in DB');
        return body.res.status(200).json({data: user, pageData: {page: body.page, totalPages: body.totalPages}});
      })
    })
  },

  setPermission3(body) {
    User.findOneAndUpdate({username: body.username}, {$set: {permissions: body.newPermission, status: 'blocked'}}, {new: true}, (err, user) => {
      if (err) logger.error('could not change permissions');
      return body.res.status(200).json(user);
    })
  },

  setPermission1or2(body) {
    User.findOneAndUpdate({username: body.username}, {$set: {permissions: body.newPermission, status: 'active'}}, {new: true}, (err, user) => {
      if (err) logger.error('could not change permissions');
      return body.res.status(200).json(user);
    })
  },

  setActiveStatus(body) {
    User.findOneAndUpdate({username: body.username}, {$set: {status: body.newStatus, permissions: 2}}, {new: true}, (err, user) => {
      if (err) logger.error('could not change status');
      return body.res.status(200).json(user);
    })
  },

  setNotActiveStatus(body) {
    User.findOneAndUpdate({username: body.username}, {$set: {status: body.newStatus, permissions: 3}}, {new: true}, (err, user) => {
      if (err) logger.error('could not change status');
      return body.res.status(200).json(user);
    })
  },

  updateUserStat(body) {
    User.findOneAndUpdate({username: body.user}, {$push: {statistic: body.result}}, (err, userWithNewStats) => {
      if (err) {
        logger.error('error with addVote');
        return body.res.status(500);
      }
      return body.res.status(200).json(userWithNewStats.statistic);
    })
  },

  fetchStats(body) {
    User.findOne({username: body.user},  (err, user) => {
      if(err) body.res.status(500).json({error: 'could not find user stat'});
      if (!user.statistic.length) {
        logger.error('no stats yet');
        return body.res.status(200).json(user.statistic)
      }
      return body.res.status(200).json(user.statistic);
    })
  },

  changePassword  (body) {
    User.findOne({username: body.username}, (err, user) => {
      if(!user) logger.error('no user');
      if(user) {
        user.authenticate(body.oldPass, (err, response) => {
          logger.verbose(`${response}, old pass authenticated`);
          if(err) logger.error('internal error');
          if (!response) {
            logger.error('old password error');
            body.res.send({error: 'error with old pass'}).status(401);
          } else {
            usersHelper.updatePassword(user, body);
          }
        })
      }
    })
  },

  updatePassword(userWithOldPass, body) {
    logger.verbose(`userWithOldPass, ${userWithOldPass.email}`);
    userWithOldPass.hashPassword(body.newPass, (err, hash) => {
      User.findOneAndUpdate({username: body.username}, {$set: {passwordHashed: hash}}, {new: true}, (err, userWithNewPass) => {
        if (err) logger.error('could not change password');
        return body.res.status(200).json(userWithNewPass);
      })
    })
  }

}

module.exports = usersController;
