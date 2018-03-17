var db = require('./models');

var question_list = [
  {
  category: "Science: Computers",
  type: "multiple",
  difficulty: "hard",
  question: "The Harvard architecture for micro-controllers added which additional bus?",
  correct_answer: "Instruction",
  incorrect_answers: [
    "Address",
    "Data",
    "Control"
  ]
  },
  {
  category: "Science: Computers",
  type: "multiple",
  difficulty: "hard",
  question: "What was the name of the security vulnerability found in Bash in 2014?",
  correct_answer: "Shellshock",
  incorrect_answers: [
    "Heartbleed",
    "Bashbug",
    "Stagefright"
  ]
  },
  {
  category: "Science: Computers",
  type: "multiple",
  difficulty: "hard",
  question: "Which of these names was an actual codename for a cancelled Microsoft project?",
  correct_answer: "Neptune",
  incorrect_answers: [
    "Enceladus",
    "Pollux",
    "Saturn"
  ]
  }
];

db.Question.remove({}, function(err, questions){
  console.log('removed all questions');

    db.Question.create(question_list, (function(err, allQuestions) {
      if (err) {
        console.log(err);
      } else {
        console.log(allQuestions);
        process.exit(0)
      };
    }));
  });


    // var question = new db.Question({
    //   category: questionData.category,
    //   type: questionData.type,
    //   difficulty: questionData.difficulty,
    //   question: questionData.question,
    //   correct_answer: questionData.correct_answer,
    //   incorrect_answers: questionData.incorrect_answers
    // });
    // question.save(function(err) {
    //   if(err) {
    //     console.log("save error");
    //   } else {
    //     console.log("Saved: ", question._id)
    //     process.exit(0);
    //   };
    // });
    // console.log(questionData.correct_answer)
