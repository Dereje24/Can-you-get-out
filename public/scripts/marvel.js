
$(document).ready(function(){
  console.log("ready!")
  // $.ajax({
  // 	method: 'GET',
  // 	url: '/api/questions',
  // 	success: handleSuccess
  //
  // });

  //accessToken
  mapboxgl. accessToken =
  "pk.eyJ1IjoieGluZ3pvIiwiYSI6ImNqZXU2cXV3cTAzczUyeG1tZG03Z25zbWgifQ.ej8aUunGo8OUsbRG3XGjuw";

  //declare our map
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/xingzo/cjeyv8o3z4m5h2so7w13s9hzx',
  		zoom: 8.6,
      center: [-83.765, 34.974]
  });
});
