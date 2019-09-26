const mongoose = require('mongoose');
const logger = require('./config/winston');
const config = require('./config/config');

mongoose.connect(config.mongoose.url, config.mongoose.settings);

mongoose.set('useFindAndModify', false);

mongoose.connection.on('error', () => {
  logger.error('DB error');
});
mongoose.connection.once('open', () => {
  logger.info('connected to the data base');
});

module.exports = mongoose;
