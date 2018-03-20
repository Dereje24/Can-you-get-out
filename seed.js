var db = require('./models');
var quizzes_list = [
  {
    title: "Computer Science Quiz",
    quiz_category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
  },
  {
    title: "Heroes and Villians",
    quiz_category: "Marvel",
    type: "multiple",
    difficulty: "hard",
  }
];

var questions_list = [
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
  },

  //MARVEL

  {
  category: "Marvel",
  type: "multiple",
  difficulty: "hard",
  question: "Which trait do you most value and admire?",
  correct_answer: "Creativity",
  incorrect_answers: [
    "Athleticism",
    "Trickery",
    "Vengence"
    ]
  },
  {
  category: "Marvel",
  type: "multiple",
  difficulty: "hard",
  question: "Complete this sentence: With great power comes great ...",
  correct_answer: "Responsibility",
  incorrect_answers: [
    "Benefits",
    "Toys",
    "Groopies"
    ]
  },
  {
  category: "Marvel",
  type: "multiple",
  difficulty: "hard",
  question: "Fill in the sentence: A man will fight when ... A God will fight when ...",
  correct_answer: "Hope be dim, hope be gone",
  incorrect_answers: [
    "rewards are grandious, rewards are none",
    "his life is on the line, all life is on the line",
    "when the suns out, no matter the weather!"
    ]
  }
  // {
  //     "category": "Science: Computers",
  //     "type": "multiple",
  //     "difficulty": "easy",
  //     "question": "This mobile OS held the largest market share in 2012.",
  //     "correct_answer": "iOS",
  //     "incorrect_answers": [
  //       "Android",
  //       "BlackBerry",
  //       "Symbian"
  //     ]
  //   },
  //   {
  //     "category": "Science: Computers",
  //     "type": "multiple",
  //     "difficulty": "easy",
  //     "question": "How many values can a single byte represent?",
  //     "correct_answer": "256",
  //     "incorrect_answers": [
  //       "8",
  //       "1",
  //       "1024"
  //     ]
  //   },
  //   {
  //     "category": "Science: Computers",
  //     "type": "multiple",
  //     "difficulty": "easy",
  //     "question": "Which computer hardware device provides an interface for all other connected devices to communicate?",
  //     "correct_answer": "Motherboard",
  //     "incorrect_answers": [
  //       "Central Processing Unit",
  //       "Hard Disk Drive",
  //       "Random Access Memory"
  //     ]
  //  }
];

// db.Question.remove({}, function(err, questions){
//   console.log('removed all questions');
//
//     db.Question.create(questions_list, (function(err, allQuestions) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(allQuestions);
//         process.exit(0)
//       };
//     }));
//   });

db.Question.remove({}, function(err, questions) {
  console.log("removed all questions");
  db.Question.create(questions_list, function(err, questions){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all questions');
    console.log("created", questions.length, "questions");

    db.Quiz.remove({}, function(err, quiz){
      console.log('removed all quizzes');
      quizzes_list.forEach(function (quizData) {
        var quiz = new db.Quiz({
          title: quizData.title,
          type: quizData.type,
          difficulty: quizData.difficulty,
        });
        //use find instead of findOne to find all questions?
        db.Question.find({ category: quizData.quiz_category }, function(err, quizQuestions) {
          console.log("THIS IS OUR QUIZ CATEGORY", quizData.quiz_category);
          console.log("THIS IS OUR FOUND CATEGORY", quizQuestions);
          console.log('found question in category: ' + quizQuestions[0].category + ' for quiz ' + quiz.title);
          quiz.questions = quizQuestions;
          console.log("THESE ARE OUR quiz questions", quiz.questions);

          if (err) {
            console.log(err);
            return;
          }
          // quiz.quiz_category = foundCategory;
          // else {
          //   if(quiz.quiz_category = foundCategory) {
          //
          //   }

          // }

          // if(quiz.quiz_category = foundCategory)
          //   quiz.question.push(question)

          quiz.save(function(err, savedQuiz) {
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedQuiz.title + ' with questions ' + quizQuestions);
          });

        });
      });
    });
  });
});
