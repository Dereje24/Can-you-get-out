var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Can-you-get-out');
var Question = require('./Question');

module.exports = { Question: Question };
