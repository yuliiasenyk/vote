const express = require('express');
const app = express();
const config = require('./config/config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || config.port;
const http = require('http').createServer(app);
const errorHandler = require('./errorHandler');
const logger = require('./config/winston');
const routes = require('./routes');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev',{stream: logger.stream}));
app.use(routes);
app.use(errorHandler);
http.listen(PORT, logger.info(`votes server is on port ${PORT}`));

module.exports =  app;
