var db = require('../models/index');

module.exports = {
  index: function(req,res){
    db.Question.find({}, function(err, allQuestions){
      if(err){res.status(500).json({"ERROR":"Database Error"})}
      console.log("allQuestions: \n", allQuestions)
      res.status(200).json({"questions": allQuestions})
    });
  },

  show: function(req,res){
    var questionId = req.params.id;
    db.Question.findOne({_id: questionId}, function(err, foundQuestion){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("foundQuestion: \n", foundQuestion);
      res.status(200).json({"question": foundQuestion});
    });
  },

  create: function(req, res){
    var newquestion = req.body;
    db.Question.create(newquestion, function(err, newquestion){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("newquestion: \n", newquestion);
      res.status(200).json({"question": newquestion});
    });
  },

  update: function(req, res){
    var updatedquestion = req.body;
    var questionId = req.params.id
    db.Question.findOneAndUpdate({_id: questionId}, updatedquestion, {new:true}, function(err, updatedquestion){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("updatedquestion: \n", updatedquestion);
      res.status(200).json({"question": updatedquestion});
    });
  },

  destroy: function(req, res){
    var questionId = req.params.id
    db.Question.remove({_id: questionId}, function(err, removedquestion){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("removedquestion: \n", removedquestion);
      res.status(200).json({"question": removedquestion});
    });
  },

  //HTML endpoint to start the quiz ( list all questions)

  list: function(req, res){

    // console.log("HIT THE LIST");
    db.Question.find({}, function(err, allQuestions){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("allQuestions: \n", allQuestions);
      // return;
      res.render("map", { quiz: allQuestions});
    });
  }
};
