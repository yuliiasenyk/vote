const mongoose = require('../initMongo');

const voteSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: String,
  state: String,
  options: [String],
  start: String,
  end: String,
  results: {type: {}, default: {}},
  participants: [],
}, {strict: false, minimize: false, });

let Vote = mongoose.model("Vote", voteSchema);

module.exports = Vote;
