// $(document).ready(function(){
//
// var totalQuestions = questions_list.length;
//
// var totalQuizzes = questions_list.length;
//
// $('#button').on('click', function(){
// 	console.log('clicked button button');
// });
//
// $('#question').on('click', 'next-button', function(){
// 	console.log('clicked question button');
// });
//
// });

console.log("Sanity Check: JS is working!");
var $quizzesList;
var allQuizzes = [];

$(document).ready(function() {

  $quizzesList = $('#quizTarget');

  $.ajax({
    method: 'GET',
    url: '/api/quiz',
    success: handleSuccess,
    error: handleError
  });

  // $('#newQuizForm').on('submit', function(e) {
  //   e.preventDefault();
  //   console.log('new quiz serialized', $(this).serializeArray());
  //   $.ajax({
  //     method: 'POST',
  //     url: '/api/quizzes',
  //     data: $(this).serializeArray(),
  //     success: newQuizSuccess,
  //     error: newQuizError
  //   });
  // });

  // $quizzesList.on('click', '.deleteBtn', function() {
  //   console.log('clicked delete button to', '/api/quizzes/'+$(this).attr('data-id'));
  //   $.ajax({
  //     method: 'DELETE',
  //     url: '/api/quizzes/'+$(this).attr('data-id'),
  //     success: deleteQuizSuccess,
  //     error: deleteQuizError
  //   });
  // });
  //
  // $quizzesList.on('click', '.edit-quiz-button', function() {
  //   console.log('clicked edit button');
  //   $(this).parent().find(".edit-input").show();
  //
  // });
  //
  // $quizzesList.on('click', '.edit-quiz-submit-button', function() {
  //   $(this).parent().hide();
  //   let newTitle = $(this).parent().find("input").val();
  //   $.ajax({
  //     method: "PUT",
  //     url: `/api/quizzes/${ $(this).attr('data-id') }`,
  //     data: { title: newTitle },
  //     success: (quiz) => {
  //       $(this).parent().parent().find(".quiz-title").html(quiz.title);
  //     }
  //   })
  //
  // })
  //
  // $quizzesList.on('submit', '#addQuestionForm', function(e) {
  //   e.preventDefault();
  //   console.log('new questions');
  //   $.ajax({
  //     method: 'POST',
  //     url: '/api/quizzes/'+$(this).attr('data-id')+'/questions',
  //     data: $(this).serializeArray(),
  //     success: newQuestionSuccess,
  //     error: newQuestionError
  //   });
  // });
  //
  // $quizzesList.on('click', '.deleteQuestion', function() {
  //   $.ajax({
  //     method: 'DELETE',
  //     url: '/api/quizzes/'+$(this).data('quizid')+'/questions/'+$(this).data('quesid'),
  //     success: deleteQuestionSuccess,
  //     error: function(xhr, status, err){
  //       console.log(err);
  //     }
  //   });
  // });

});

// function getCharacterHtml(_book_id, character) {
//   return `${character.name} <button class="deleteCharacter btn btn-danger" data-bookid=${_book_id} data-charid=${character._id}><b>x</b></button>`;
// }
//
// function getAllCharactersHtml(_book_id, characters) {
//   return characters.map(function(character) {
//               return getCharacterHtml(_book_id, character);
//             }).join("");
// }

function getQuizHtml(quiz) {
  return `<hr>
          <p>
            <b class="quiz-title">${quiz.title}</b>
						<b class="quiz-title">${quiz.questions}</b>
            <span class="edit-input" style="display: none">
              <input type="text" value="${quiz.title}" />
              <button class="edit-book-submit-button" data-id="${quiz._id}">Save</button>
            </span>
            </p>
          `;
}

function getAllQuizzesHtml(quizzes) {
	console.log(quizzes.quizzes);
  return quizzes.quizzes.map(getQuizHtml).join("");
}

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $quizzesList.empty();

  // pass `allBooks` into the template function
  var quizzesHtml = getAllQuizzesHtml(allQuizzes);

  // append html to the view
  $quizzesList.append(quizzesHtml);
}

function handleSuccess(json) {
  allQuizzes = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#QuizTarget').text('Failed to load quizzes, is the server working?');
}

// function newBookSuccess(json) {
//   $('#newBookForm input').val('');
//   allBooks.push(json);
//   render();
// }
//
// function newBookError() {
//   console.log('newbook error!');
// }
//
// function deleteBookSuccess(json) {
//   var book = json;
//   console.log(json);
//   var bookId = book._id;
//   console.log('delete book', bookId);
//   // find the book with the correct ID and remove it from our allBooks array
//   for(var index = 0; index < allBooks.length; index++) {
//     if(allBooks[index]._id === bookId) {
//       allBooks.splice(index, 1);
//       break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
//     }
//   }
//   render();
// }
//
// function deleteBookError() {
//   console.log('deletebook error!');
// }
//
// function newCharacterSuccess(json) {
//   var book = json;
//   var bookId = book._id;
//   // find the book with the correct ID and update it
//   for(var index = 0; index < allBooks.length; index++) {
//     if(allBooks[index]._id === bookId) {
//       allBooks[index] = book;
//       break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
//     }
//   }
//   render();
// }
//
// function newCharacterError() {
//   console.log('adding new character error!');
// }
//
// function deleteCharacterSuccess(json) {
//   var book = json;
//   var bookId = book._id;
//   // find the book with the correct ID and update it
//   for(var index = 0; index < allBooks.length; index++) {
//     if(allBooks[index]._id === bookId) {
//       allBooks[index] = book;
//       break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
//     }
//   }
//   render();
// }
