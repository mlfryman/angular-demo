'use strict';

var port = process.env.PORT,
    express = require('express'),
    morgan = require('morgan'),
    app = express();

app.use(morgan('dev'));
app.use(express.static(_dirname + '/../public'));
app.listen(port);
