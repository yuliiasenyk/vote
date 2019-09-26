const winston = require('winston');

const logger = winston.createLogger({exitOnError: false});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message.slice(0, -1).replace(/\u001b\[[0-9]{1,2}m/g, ''));
  },
};
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    )
  }));
}

module.exports = logger;
