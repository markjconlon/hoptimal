// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  var barLat = $('.temp_information').data('lat');
  var barLng = $('.temp_information').data('lng');

  $("#directions").on('click', function(e){
    $('#map').html("");
    function getLocation(callBack) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(callBack);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    $('#map').append(function(){
        getLocation(initMap);
        function initMap(position) {
          var bar = {lat: barLat, lng: barLng};
          var current = {lat: position.coords.latitude, lng: position.coords.longitude};

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
});
