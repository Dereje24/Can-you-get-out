var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  correct_answer: String,
  incorrect_answers: Array
});

var Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;
