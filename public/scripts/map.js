

mapboxgl.accessToken = 'pk.eyJ1IjoieGluZ3pvIiwiYSI6ImNqZXU2cXV3cTAzczUyeG1tZG03Z25zbWgifQ.ej8aUunGo8OUsbRG3XGjuw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/xingzo/cjeu6x4f908j22rpez3ersfua',
    zoom: 8.7,
    center: [-83.765, 34.974]
});

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/xingzo/cjeu6x4f908j22rpez3ersfua' + layerId + '-v9');
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}
