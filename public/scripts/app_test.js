console.log("Sanity Check: JS is working!");
var $questionsList;
var allquestions = [];

$(document).ready(function(){

  $questionsList = $('#questionTarget');

  $.ajax({
    method: 'GET',
    url: '/api/questions',
    success: handleSuccess,
    error: handleError
  });

  // $('#newAnswerForm').on('submit', function(e) {
  //   e.preventDefault();
  //   console.log('new answer serialized', $(this).serializeArray());
  //   $.ajax({
  //     method: 'POST',
  //     url: '/api/questions',
  //     data: $(this).serializeArray(),
  //     success: newAnswerSuccess,
  //     error: newAnswerError
  //   });
  // });
});

function getQuestionHtml(question) {
  return `<hr>
          <p>
            <b class="question-question">${question.question}</b>
            <span class="edit-input" style="display: none">
              <input type="text" value="${question.incorrect_answer}" />
            </span>
            <b class="question-question">${question.correct_answer}</b>
            <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${question._id}>Delete</button>
          </p>
          `;
}

function getAllQuestionsHtml(questions) {
  return questions.map(getQuestionHtml).join("");
}

function render () {
  // empty existing posts from view
  $questionsList.empty();

  // pass `allBooks` into the template function
  var questionsHtml = getAllQuestionsHtml(allQuestions);

  // append html to the view
  $questionsList.append(questionsHtml);
};

function handleSuccess(json) {
  allQuestions = json;
  render();
};

function handleError(e) {
  console.log('huston we have a problem!');
  $('#questionTarget').text('Failed to load questions, is the server working?');
};
