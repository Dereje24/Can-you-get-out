var db = require('../models');

module.exports = {
  index: function(req,res){
    db.answer.find({}, function(err, allAnswers){
      if(err){res.status(500).json({"ERROR":"Database Error"})}
      console.log("allAnswers: \n", allAnswers)
      res.status(200).json({"answers": allAnswers})
    });
  },

  show: function(req,res){
    var answerId = req.params.id;
    db.answer.findOne({_id: answerId}, function(err, foundAnswer){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("foundAnswer: \n", foundAnswer);
      res.status(200).json({"answer": foundAnswer});
    });
  },

  create: function(req, res){
    var newAnswer = req.body;
    db.answer.create(newAnswer, function(err, newAnswer){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("newanswer: \n", newAnswer);
      res.status(200).json({"answer": newAnswer});
    });
  },

  update: function(req, res){
    var updatedAnswer = req.body;
    var AnswerId = req.params.id
    db.answer.findOneAndUpdate({_id: AnswerId}, updatedAnswer, {new:true}, function(err, updatedAnswer){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("updatedAnswer: \n", updatedAnswer);
      res.status(200).json({"answer": updatedAnswer});
    });
  },

  destroy: function(req, res){
    var answerId = req.params.id
    db.answer.remove({_id: answerId}, function(err, removedAnswer){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("removedAnswer: \n", removedAnswer);
      res.status(200).json({"answer": removedAnswer});
    });
  }
};
