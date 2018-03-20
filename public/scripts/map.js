

$(document).ready(function(){
$.ajax({
	method: 'GET',
	url: '/api/questions',
	success: handleSuccess

});

//accessToken
mapboxgl. accessToken =
"pk.eyJ1IjoieGluZ3pvIiwiYSI6ImNqZXU2cXV3cTAzczUyeG1tZG03Z25zbWgifQ.ej8aUunGo8OUsbRG3XGjuw";



//declare our map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/xingzo/cjexnnpwg3gmh2rpg8v6ygu4a',
		zoom: 8.6,
    center: [-83.765, 34.974]
});


// _________________________ _________________________
//MAP MENU FUNCTIONS
// _________________________ _________________________

var allQuestions = {};

var cords1 = [-83.765, 34.974];
var cords2 = [-84.765, 39.974];
var cords3 = [-74.0066, 40.7135];
var bounds1 = [
    [-84.04728500751165, 34.68392799015035], // Southwest coordinates
    [-83.6058699000139, 35.07764500765852]  // Northeast coordinates
];
var newCenter;
var formsArray = {};
var icon1 = "icon1";
var $questionNumber = 1;

$loadQuestion = function(allQuestions, questionNumber, cords){
  console.log("in the loaded markers function");
	console.log(cords);

  map.on('load', function() {
		// Insert the layer beneath any symbol layer.
	     var layers = map.getStyle().layers;

	     var labelLayerId;
	     for (var i = 0; i < layers.length; i++) {
	         if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
	             labelLayerId = layers[i].id;
	             break;
	         }
	     }

			 map.addLayer({

             "id": "background",
             "type": "background",
             "paint": {
							 "background-color": "#001F30"
						 },
						 "layout": {
							 "visibility": "none"
						 }

			 });

			 map.addLayer({
										 "id": "road2",
										 "type": "line",
										 "source": "composite",
										 "source-layer": "road",
										 "filter": [
												 "in",
												 "$type",
												 "LineString",
												 "Point",
												 "Polygon"
										 ],
										 "layout": {
												 "visibility": "none"
										 },
										 "paint": {
												 "line-color": "#49DAFF",
												 "line-opacity": 1,
												 "line-blur": 5,
												 "line-width": 10
										 }
			 });

	     map.addLayer({
	         'id': '3d-buildings',
	         'source': 'composite',
	         'source-layer': 'building',
	         'filter': ['==', 'extrude', 'true'],
	         'type': 'fill-extrusion',
	         'minzoom': 15,
					 'layout': {
							 'visibility': 'none'
							 },
	         'paint': {
	             'fill-extrusion-color': '#FF7A24',

	             // use an 'interpolate' expression to add a smooth transition effect to the
	             // buildings as the user zooms in
	             'fill-extrusion-height': [
	                 "interpolate", ["linear"], ["zoom"],
	                 15, 0,
	                 15.05, ["get", "height"]
	             ],
	             'fill-extrusion-base': [
	                 "interpolate", ["linear"], ["zoom"],
	                 15, 0,
	                 15.05, ["get", "min_height"]
	             ],
	             'fill-extrusion-opacity': 1
	         }
	     }, labelLayerId);

			 map.addLayer( {
            "id": "satellite2",
            "type": "raster",
            "source": "mapbox",
            "source-layer": "mapbox_satellite_full",
						'layout': {
								'visibility': 'none'
								},
            "paint": {
                "raster-contrast": 0.1,
                "raster-brightness-min": 0,
                "raster-saturation": 0.28,
                "raster-opacity": 0,
                "raster-brightness-max": 1
            }
        });

      map.loadImage('/images/logo4.png', function(error, image) {
          if (error) throw error;
          map.addImage(allQuestions.questions[questionNumber]._id, image);
          map.addLayer({


						"id": allQuestions.questions[questionNumber]._id,
						"type": "symbol",
						"source": {
							"type": "geojson",
							"data": {
								"type": "FeatureCollection",
								"features": [{
									"title": "Tribe 1",
									"type": "Feature",
									"properties": {
										"description":
										`<strong>Question</strong <h3> ${allQuestions.questions[questionNumber].question} </h3>
										<div id = "answers"><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[0]}
										</label><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[1]}
										</label><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[2]}
										</label><strong>Question</strong <h3> ${allQuestions.questions[questionNumber].question} </h3>
										<div id = "answers"><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[0]}
										</label><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[1]}
										</label><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[2]}
										</label><strong>Question</strong <h3> ${allQuestions.questions[questionNumber].question} </h3>
										<div id = "answers"><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[0]}
										</label><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[1]}
										</label><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[2]}
										</label></div><button id="next-button"> nextforreal </button>

										 <a href=\"http://www.blackcatdc.com\">Submit</a> <a href=\"http://www.exitclov.com\" target=\"_blank\" title=\"Opens in a new window\">Next</a> and <a href=\"http://godsilla.bandcamp.com\" target=\"_blank\" title=\"Opens in a new window\">Gods’illa</a>. 9:00 p.m. $12.`,
										"icon": "music"
									},
									"geometry": {
										"type": "Point",
										"coordinates": cords
									}

                      }]
                  }
              },
              "layout": {
                  "text-field": "{title}",
                  "icon-image": allQuestions.questions[questionNumber]._id,
                  "icon-size": 0.25
              },
							"message": "Baz",
							"iconSize": [40, 40]
          });
      });
			// $(selector).data('answer') // => true
			map.loadImage('/images/logo4.png', function(error, image) {
					if (error) throw error;
					map.addImage(allQuestions.questions[1]._id, image);
					map.addLayer({
						"id": allQuestions.questions[1]._id,
						"type": "symbol",
						"source": {
							"type": "geojson",
							"data": {
								"type": "FeatureCollection",
								"features": [{
									"title": "Tribe 1",
									"type": "Feature",
									"properties": {
										"description":
										`<strong>Question</strong <h3> ${allQuestions.questions[1].question} </h3>
										<div id = "answers"><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[0]}
										</label><label>
										<input type="radio" data-answer="true" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[1]}
										</label><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[2]}
										</label></div><button id="next-button"> nextforreal </button>
										 <a href=\"http://www.blackcatdc.com\">Submit</a> <a href=\"http://www.exitclov.com\" target=\"_blank\" title=\"Opens in a new window\">Next</a> and <a href=\"http://godsilla.bandcamp.com\" target=\"_blank\" title=\"Opens in a new window\">Gods’illa</a>. 9:00 p.m. $12.`,
										"icon": "music"
									},
									"geometry": {
										"type": "Point",
										"coordinates": cords2
									}
											}]
									}
							},
							"layout": {
									"text-field": "{title}",
									"icon-image": allQuestions.questions[1]._id,
									"icon-size": 0.25,
									"visibility": "none"
							},
								"message": "Baz",
                "iconSize": [40, 40]
					});
			});

			map.loadImage('/images/logo4.png', function(error, image) {
					if (error) throw error;
					map.addImage(allQuestions.questions[2]._id, image);
					map.addLayer({
						"id": allQuestions.questions[2]._id,
						"type": "symbol",
						"source": {
							"type": "geojson",
							"data": {
								"type": "FeatureCollection",
								"features": [{
									"title": "Tribe 1",
									"type": "Feature",
									"properties": {
										"description":
										`<strong>Question</strong <h3> ${allQuestions.questions[2].question} </h3>
										<div id = "answers"><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[0]}
										</label><label>
										<input type="radio" data-answer="true" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[1]}
										</label><label>
										<input type="radio" name="question${0}" value="${0}">
										${0} : ${allQuestions.questions[questionNumber].incorrect_answers[2]}
										</label></div><button id="next-button"> nextforreal </button>
										 <a href=\"http://www.blackcatdc.com\">Submit</a> <a href=\"http://www.exitclov.com\" target=\"_blank\" title=\"Opens in a new window\">Next</a> and <a href=\"http://godsilla.bandcamp.com\" target=\"_blank\" title=\"Opens in a new window\">Gods’illa</a>. 9:00 p.m. $12.`,
										"icon": "music"
									},
									"geometry": {
										"type": "Point",
										"coordinates": cords3
									}
											}]
									}
							},
							"layout": {
									"text-field": "{title}",
									"icon-image": allQuestions.questions[2]._id,
									"icon-size": 1,
									"visibility": "none"
							},
								"message": "Baz",
								"iconSize": [40, 40]
					});
			});

      // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.


	createFormfunction(questionNumber, cords);

	for ( var i = 0; i < allQuestions.questions.length; i++)
	{
		map.on('click', allQuestions.questions[i]._id, function (e) {
				var coordinates = e.features[0].geometry.coordinates.slice();

				// Ensure that if the map is zoomed out such that multiple
				// copies of the feature are visible, the popup appears
				// over the copy being pointed to.
				while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
						coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
				}

				// this is where the question starts!!!!
				//
				// for(var j = 0; j < allQuestions.questions.length; j++ )
				// {
				//
				//
				//
				// var createForm = document.createElement('form');
				// createForm.setAttribute('action', '');
				// createForm.setAttribute('method', 'get');
				//
				// var questionLable = document.createElement('lable');
				// questionLable.innerHTML = allQuestions.questions[j].question;
				// createForm.appendChild(questionLable);
				//
				// var lineBreak = document.createElement('br');
				// createForm.appendChild(lineBreak);
				//
				// var inputElement = document.createElement('input');
				// inputElement.innerHTML = 'Hello';
				// inputElement.setAttribute('type', 'radio');
				// inputElement.setAttribute('name', 'question');
				// inputElement.setAttribute('value', allQuestions.questions[j].incorrect_answers[0]);
				// createForm.appendChild(inputElement);
				//
				// var lable0 = document.createElement('lable');
				// lable0.innerHTML = allQuestions.questions[j].incorrect_answers[0];
				// createForm.appendChild(lable0);
				// $(inputElement).on('change', function() {
				// 	lable0.style.color = "red";
				// });
				//
				// var lineBreak = document.createElement('br');
				// createForm.appendChild(lineBreak);
				//
				// var inputElement = document.createElement('input');
				// inputElement.setAttribute('type', 'radio');
				// inputElement.setAttribute('name', 'question');
				// createForm.appendChild(inputElement);
				//
				// var lable1 = document.createElement('lable');
				// lable1.innerHTML = allQuestions.questions[j].incorrect_answers[1];
				// createForm.appendChild(lable1);
				// $(inputElement).on('change', function() {
				// 	lable1.style.color = "red";
				// });
				//
				// var lineBreak = document.createElement('br');
				// createForm.appendChild(lineBreak);
				//
				// var inputElement = document.createElement('input');
				// inputElement.setAttribute('type', 'radio');
				// inputElement.setAttribute('name', 'question');
				// createForm.appendChild(inputElement);
				//
				// var lable2 = document.createElement('lable');
				// lable2.innerHTML = allQuestions.questions[j].incorrect_answers[2];
				// createForm.appendChild(lable2);
				// $(inputElement).on('change', function() {
				// 	lable2.style.color = "red";
				// });
				// var lineBreak = document.createElement('br');
				// createForm.appendChild(lineBreak);
				//
				// var inputElement = document.createElement('input');
				// inputElement.setAttribute('type', 'radio');
				// inputElement.setAttribute('name', 'question');
				// createForm.appendChild(inputElement);
				//
				// var lable = document.createElement('lable');
				// lable.innerHTML = allQuestions.questions[j].correct_answer;
				// createForm.appendChild(lable);
				// $(inputElement).on('change', function() {
				// 	lable.style.color = "lightgreen";
				// 	$("#next-question").removeClass("hidden");
				// });
				//
				// var lineBreak = document.createElement('br');
				// createForm.appendChild(lineBreak);
				//
				// formsArray.form = createForm;
				//
				// console.log(formsArray.form);
				//
				//
				//
				// 	}
					//
					// new mapboxgl.Popup()
					// 		.setLngLat(coordinates)
					// 		.setDOMContent(createForm)
					// 		.addTo(map);


		});

	}

  });


};

var createFormfunction = function(questionNumber, cords){

	map.on('click', allQuestions.questions[questionNumber]._id, function (e) {

	var j = questionNumber;
	var createForm = document.createElement('form');
	createForm.setAttribute('action', '');
	createForm.setAttribute('method', 'get');

	var questionLable = document.createElement('lable');
	questionLable.innerHTML = allQuestions.questions[j].question;
	createForm.appendChild(questionLable);

	var lineBreak = document.createElement('br');
	createForm.appendChild(lineBreak);

	var inputElement = document.createElement('input');
	inputElement.innerHTML = 'Hello';
	inputElement.setAttribute('type', 'radio');
	inputElement.setAttribute('name', 'question');
	inputElement.setAttribute('value', allQuestions.questions[j].incorrect_answers[0]);
	createForm.appendChild(inputElement);

	var lable0 = document.createElement('lable');
	lable0.innerHTML = allQuestions.questions[j].incorrect_answers[0];
	createForm.appendChild(lable0);
	$(inputElement).on('change', function() {
		lable0.style.color = "red";
	});

	var lineBreak = document.createElement('br');
	createForm.appendChild(lineBreak);

	var inputElement = document.createElement('input');
	inputElement.setAttribute('type', 'radio');
	inputElement.setAttribute('name', 'question');
	createForm.appendChild(inputElement);

	var lable1 = document.createElement('lable');
	lable1.innerHTML = allQuestions.questions[j].incorrect_answers[1];
	createForm.appendChild(lable1);
	$(inputElement).on('change', function() {
		lable1.style.color = "red";
	});

	var lineBreak = document.createElement('br');
	createForm.appendChild(lineBreak);

	var inputElement = document.createElement('input');
	inputElement.setAttribute('type', 'radio');
	inputElement.setAttribute('name', 'question');
	createForm.appendChild(inputElement);

	var lable2 = document.createElement('lable');
	lable2.innerHTML = allQuestions.questions[j].incorrect_answers[2];
	createForm.appendChild(lable2);
	$(inputElement).on('change', function() {
		lable2.style.color = "red";
	});
	var lineBreak = document.createElement('br');
	createForm.appendChild(lineBreak);

	var inputElement = document.createElement('input');
	inputElement.setAttribute('type', 'radio');
	inputElement.setAttribute('name', 'question');
	createForm.appendChild(inputElement);

	var lable = document.createElement('lable');
	lable.innerHTML = allQuestions.questions[j].correct_answer;
	createForm.appendChild(lable);
	$(inputElement).on('change', function() {
		lable.style.color = "lightgreen";
		$("#next-question").removeClass("hidden");
	});

	var lineBreak = document.createElement('br');
	createForm.appendChild(lineBreak);

	new mapboxgl.Popup()
			.setLngLat(cords)
			.setDOMContent(createForm)
			.addTo(map);

		})

}



function handleSuccess(json) {
  allQuestions = json;
  console.log(allQuestions);
  $loadQuestion(allQuestions, 0, cords1);
}

$("#next-question").on("click", function(){

	map.flyTo({
	 center: cords2
	});
	map.setLayoutProperty(allQuestions.questions[1]._id, 'visibility', 'visible');
	createFormfunction(1, cords2);


})

$("#wakanda").on("click", function(){

	console.log("we in the next button fun");

	map.setLayoutProperty("3d-buildings", 'visibility', 'visible');
	map.setLayoutProperty("satellite2", 'visibility', 'visible');
	map.setLayoutProperty("satellite", 'visibility', 'none');
	map.setLayoutProperty("background", 'visibility', 'visible');

	map.flyTo({
			 center: cords3,
			 pitch: 45,
			 hash: true,
				bearing: -17.6,
				zoom: 15.5
	 });

	 map.setLayoutProperty("road2", 'visibility', 'visible');
	 map.setLayoutProperty(allQuestions.questions[2]._id, 'visibility', 'visible');
	 createFormfunction(2, cords3);


})

});
