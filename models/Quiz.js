var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = require('./Question');

var QuizSchema = new Schema({
  title: String,
  category: String,
  type: String,
  difficulty: String,
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

var Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
