
//accessToken
mapboxgl.accessToken = 'pk.eyJ1IjoieGluZ3pvIiwiYSI6ImNqZXU2cXV3cTAzczUyeG1tZG03Z25zbWgifQ.ej8aUunGo8OUsbRG3XGjuw';


//declare our map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/xingzo/cjeu6x4f908j22rpez3ersfua',
    zoom: 8.7,
    center: [-83.765, 34.974]
});


// _________________________ _________________________
//MAP MENU FUNCTIONS
// _________________________ _________________________
// var layerList = document.getElementById('menu');
// var inputs = layerList.getElementsByTagName('input');
//
// function switchLayer(layer) {
//     var layerId = layer.target.id;
//     map.setStyle('mapbox://styles/xingzo/cjeu6x4f908j22rpez3ersfua' + layerId + '-v9');
// }
//
// for (var i = 0; i < inputs.length; i++) {
//     inputs[i].onclick = switchLayer;
// }



map.on('load', function() {
    map.loadImage('http://localhost:3000/images/logo4.png', function(error, image) {
        if (error) throw error;
        map.addImage('cat', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-83.765, 34.974]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "cat",
                "icon-size": 0.25
            }
        });
    });
});
