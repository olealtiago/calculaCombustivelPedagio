var map = L.map('map').setView([-23.550520, -46.633308], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var cursorMarker1 = L.marker([-23.550520, -46.633308], { draggable: true }).addTo(map);
var cursorMarker2 = L.marker([-23.550520, -46.633308], { draggable: true }).addTo(map);


var line = L.polyline([cursorMarker1.getLatLng(), cursorMarker2.getLatLng()], {
    color: 'red'
}).addTo(map);

cursorMarker1.on('drag', function (event) {
    var cursorLatLng = cursorMarker1.getLatLng();
    document.getElementById('latitude1').textContent = cursorLatLng.lat;
    document.getElementById('longitude1').textContent = cursorLatLng.lng;
    updateLine();
    calculateDistance();
});

cursorMarker2.on('drag', function (event) {
    var cursorLatLng = cursorMarker2.getLatLng();
    document.getElementById('latitude2').textContent = cursorLatLng.lat;
    document.getElementById('longitude2').textContent = cursorLatLng.lng;
    updateLine();
    calculateDistance();
});

function updateLine() {
    line.setLatLngs([cursorMarker1.getLatLng(), cursorMarker2.getLatLng()]);
}

function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio médio da Terra em quilômetros
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function calculateDistance() {
    var lat1 = cursorMarker1.getLatLng().lat;
    var lon1 = cursorMarker1.getLatLng().lng;
    var lat2 = cursorMarker2.getLatLng().lat;
    var lon2 = cursorMarker2.getLatLng().lng;

    var distance = haversineDistance(lat1, lon1, lat2, lon2);
    document.getElementById('distance').textContent = distance.toFixed(2) + ' km';
}
