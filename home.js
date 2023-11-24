document.addEventListener("DOMContentLoaded", function () {
    const originInput = document.getElementById('origin');
    const destinationInput = document.getElementById('destination');

    const autocompleteOrigin = new google.maps.places.Autocomplete(originInput);
    const autocompleteDestination = new google.maps.places.Autocomplete(destinationInput);
});
