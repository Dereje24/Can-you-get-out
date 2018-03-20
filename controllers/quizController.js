var db = require('../models');

module.exports = {
  index: function(req,res){
    db.Quiz.find({}, function(err, allQuizzes){
      if(err){res.status(500).json({"ERROR":"Database Error"})}
      console.log("allQuizzes: \n", allQuizzes)
      res.status(200).json({"quizzes": allQuizzes})
    });
  },

  show: function(req,res){
    var quizId = req.params.id;
    db.Quiz.findOne({_id: quizId})
      .populate('questions')
      .exec(function(err, foundQuiz) {
        if(err){res.status(500).json({"ERROR":"Database Error"});}
        console.log("foundQuiz: \n", foundQuiz);
        res.status(200).json({"quiz": foundQuiz});
      });
  },

  create: function(req, res){
    var newquiz = req.body;
    db.Quiz.create(newQuiz, function(err, newQuiz){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("newQuiz: \n", newQuiz);
      res.status(200).json({"quiz": newQuiz});
    });
  },

  update: function(req, res){
    var updatedQuiz = req.body;
    var quizId = req.params.id
    db.Quiz.findOneAndUpdate({_id: quizId}, updatedQuiz, {new:true}, function(err, updatedquiz){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("updatedQuiz: \n", updatedQuiz);
      res.status(200).json({"quiz": updatedQuiz});
    });
  },

  destroy: function(req, res){
    var quizId = req.params.id
    db.Quiz.remove({_id: quizId}, function(err, removedQuiz){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("removedQuiz: \n", removedQuiz);
      res.status(200).json({"quiz": removedQuiz});
    });
  }
};
