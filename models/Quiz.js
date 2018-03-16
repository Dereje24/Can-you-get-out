var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
  category: String,
  type: String,
  difficulty: String,
  question_id: String,
  correct_answer_id: String,
  incorrect_answers: Array //don't think we need this
});

var Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
