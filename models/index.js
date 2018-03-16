var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/3000");

module.exports.Quiz = require("./Quiz.js");
module.exports.Question = require("./Question.js");
module.exports.Answer = require("./Answer.js");
