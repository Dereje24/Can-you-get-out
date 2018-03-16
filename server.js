// REQUIRE MODULES
var express = require('express'),
    app = express(),
    controller = require('./controllers'),
    bodyParser = require('body-parser');

// CONFIGURE APP
app.use(bodyParser.urlencoded({ extended: true}));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/**********
 * ROUTES *
***********/

//HTML ENDPOINTS
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//JSON API ENDPOINTS

app.get('/api/quiz', controller.quiz.index);

app.post('/api/quiz', controller.quiz.create);

app.get('/api/quiz/:id', controller.quiz.show);

app.put('/api/quiz/:id', controller.quiz.update);

app.delete('/api/quiz/:id', controller.quiz.destroy);

/**********
 * SERVER *
***********/

//listen on port 3000
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
