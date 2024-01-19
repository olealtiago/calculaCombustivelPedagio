document.addEventListener('DOMContentLoaded', function () {
    // Obter parâmetros da URL
    var urlParams = new URLSearchParams(window.location.search);
    var originLat = parseFloat(urlParams.get('originLat')) || 0; // latitude padrão é 0 se não for fornecida
    var originLng = parseFloat(urlParams.get('originLng')) || 0; // longitude padrão é 0 se não for fornecida

    // Criar o mapa com base nos parâmetros da URL
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: originLat, lng: originLng },
        zoom: 13
    });
});
