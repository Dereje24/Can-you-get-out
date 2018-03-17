var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/3000");

module.exports.Quiz = require("./Quiz");
module.exports.Question = require("./Question");
module.exports.Answer = require("./Answer");
