// REQUIRE MODULES
var express = require('express'),
    app = express(),
    controller = require('./controllers'),
    bodyParser = require('body-parser');

// CONFIGURE APP
app.use(bodyParser.urlencoded({ extended: true}));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/**********
 * ROUTES *
***********/

//HTML ENDPOINTS
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/landing', function homepage(req, res) {
  res.sendFile(__dirname + '/views/landing.html');
});

//JSON API ENDPOINTS

//QUIZ ENDPOINTS
app.get('/api/quiz', controller.quizzes.index);

app.post('/api/quiz', controller.quizzes.create); //admins only

app.get('/api/quiz/:id', controller.quizzes.show); //admins only

app.put('/api/quiz/:id', controller.quizzes.update); //admins only

app.delete('/api/quiz/:id', controller.quizzes.destroy); //admins only

//QUESTIONS ENDPOINTS
app.get('/api/questions', controller.questions.index); // admins only

app.post('/api/questions', controller.questions.create); // admins only

app.get('/api/questions/:id', controller.questions.show); //admins only

app.put('/api/questions/:id', controller.questions.update); //admins only

app.delete('/api/questions/:id', controller.questions.destroy); //admins only

//ANSWERS ENDPOINTS
app.get('/api/answers', controller.answers.index);

app.post('/api/answers', controller.answers.create);

app.get('/api/answers/:id', controller.answers.show);

app.put('/api/answers/:id', controller.answers.update);

app.delete('/api/answers/:id', controller.answers.destroy);

/**********
 * SERVER *
***********/

//listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Server running on http://localhost:3000');
});
