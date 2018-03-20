var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/3000");

module.exports.Quiz = require("./Quiz");
module.exports.Question = require("./Question");
module.exports.Answer = require("./Answer");
