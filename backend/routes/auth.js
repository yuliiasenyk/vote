const express = require('express');
const auth = express.Router();
const authController = require('../controllers/auth-controller');

auth.post('/auth', authController.loginUser);

auth.post('/newUser', authController.signUp);

module.exports = auth;
