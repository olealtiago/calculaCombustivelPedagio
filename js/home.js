document.addEventListener("DOMContentLoaded", function () {
    const originInput = document.getElementById('origin');
    const destinationInput = document.getElementById('destination');

    const autocompleteOrigin = new google.maps.places.Autocomplete(originInput);
    const autocompleteDestination = new google.maps.places.Autocomplete(destinationInput);
});

function calculate() {
    var origin = document.getElementById('origin').value;
    var destination = document.getElementById('destination').value;
    
    // Construa a URL com os parâmetros de origem e destino
    var url = 'calculo-old.html?origin=' + encodeURIComponent(origin) + '&destination=' + encodeURIComponent(destination);
    
    // Redirecione para a página de cálculo
    window.location.href = url;
}
