// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var currentLat = 0;
var currentLng = 0;

$(document).ready(function(){
  var barLat = $('.temp_information').data('lat');
  var barLng = $('.temp_information').data('lng');
  
  $("#directions").on('click', function(e){
    $('#map').html("");
    function getLocation() {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        currentLat = position.coords.latitude;
        currentLng = position.coords.longitude;
        console.log(currentLat);
        console.log(currentLng);
    }

    $('#map').append(initMap)
      function initMap() {
        var longLat = getLocation();
        var bar = {lat: barLat, lng: barLng};
        var current = {lat: currentLat, lng: currentLng};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: bar,
          scrollwheel: false,
          zoom: 16
        });

        var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });

        // Set destination, origin and travel mode.
        var request = {
          destination: bar,
          origin: current,
          travelMode: 'WALKING'
        };

        // Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
          }
        });
    };
  });
});
