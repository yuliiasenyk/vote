const mongoose = require('../initMongo');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHashed: {
    type: String,
    required: true,
  },
  description: String,
  status: String,
  isAdmin: Boolean,
  permissions: Number,
  statistic: [Object],
}, { strict: false });

userSchema.methods = {
  authenticate: function (plainPassword, cb) {
    return bcrypt.compare(plainPassword, this.passwordHashed, cb);
  },

  hashPassword: function (password, cb) {
    return bcrypt.hash(password, saltRounds, cb);
  }
};

let User = mongoose.model("User", userSchema);

module.exports = User;

