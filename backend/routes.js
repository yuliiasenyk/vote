const express = require('express');
const router = express.Router();
const votes = require('./routes/votes');
const auth = require('./routes/auth');
const singleVote = require('./routes/singleVote');
const users = require('./routes/users');

router.use('/votes', votes);
router.use('/users', users);
router.use('/auth', auth);
router.use('/vote', singleVote);

module.exports = router;
