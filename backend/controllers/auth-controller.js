const User = require('.././models/user');
const logger = require('../config/winston');

const authController = {};

authController.loginUser = async function(req, res) {
  let body = {req: req, res: res};
  body.data = req.body;
  await authHelper.authenticateLogin(body);
}

authController.signUp = async function(req, res) {
  let body = {req: req, res: res};
  body.data = req.body;
  await authHelper.createNewOne(body);
}

const authHelper = {
  authenticateLogin(body) {
    User.findOne({$or: [{'email': body.data.l}, {'username': body.data.l}]}, (error, user) => {
      if (!user) {
        console.log('login error');
        return body.res.send({error: 'invalid login'}).status(401);
      } else {
        authHelper.authPassword(user, body)
      }
    });
  },

  authPassword(user, body){
    user.authenticate(body.data.p, (err, response) => {
      logger.verbose(`Auth result:  ${response}, ${body.data.p}, ${user.passwordHashed}`);
      if (!response) {
        console.log('password error');
        return body.res.send({error: 'invalid password'}).status(401);
      } else {
        logger.info('okay, logged in');
        const userDataForFE = {id: user._id, username: user.username};
        return body.res.json(userDataForFE);
      }
    })
  },

  createNewOne(body) {
    User.findOne({ $or: [{username: body.data.un}, {email: body.data.e}]}, (err, existingUser) => {
      if (existingUser) {
        logger.error('user exists');
        return body.res.send({error: 'user exists'});
      } else {
        this.createNewUser(body)
      }
    })
  },

  createNewUser(body) {
    const newUser = new User();
    newUser.hashPassword(body.data.p,  (err, hash) => {
      logger.verbose(`body password and hash:  ${body.data.p}, ${hash}`);
      User.create({
        username: body.data.un,
        email: body.data.e,
        passwordHashed: hash,
        description: 'new user',
        status: 'pending',
        isAdmin: false,
        permissions: 3,
      }, (err, user) => {
        logger.info('okay, signed up');
        const userDataForFE = {id: user._id, username: user.username};
        return body.res.json(userDataForFE);
      })
    })
  }
}

module.exports = authController;
