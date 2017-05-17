$(document).ready(function(){

// Filters beers index page based on user input typed within the search field
  $("#search-field").on('keyup', function(e){
    $.ajax({
      url: "/beers/search",
      method: "POST",
      data: {
        "q": {
          "name_cont": $("#search-field").val()
        }
      },
      dataType: 'html'
    }).done(function(data) {
      $("#search-beers").html(data);

      $('.all-beers-list').mouseover(function() {
        $(this).find('div.beers-list-text').animate({
          opacity: 1,
        });
      }).mouseleave(function() {
        $(this).find('div.beers-list-text').animate({
          opacity: 0,
        });
      });
    })
  });

// Filters beers index page based on selected category from drop-down menu
  $('#q_category_id').on('change', function(e){
    $.ajax({
      url: "/beers/search",
      method: "POST",
      data: {
        "q": {
          "category_id_eq": $("#q_category_id").val()
        }
      },
      dataType: 'html'
    }).done(function(data) {
      $("#search-beers").html(data);
      $('.all-beers-list').mouseover(function() {
        $(this).find('div.beers-list-text').animate({
          opacity: 1,
        });
      }).mouseleave(function() {
        $(this).find('div.beers-list-text').animate({
          opacity: 0,
        });
      });
    })
  });

// displays beer name text when mouse moves over the specific div
  $('.all-beers-list').mouseover(function() {
    $(this).find('div.beers-list-text').animate({
      opacity: 1,
    });
  }).mouseleave(function() {
    $(this).find('div.beers-list-text').animate({
      opacity: 0,
    });
  });

  // $('.all-beers-list').on('vmouseover', function() {
  //   $(this).find('div.beers-list-text').animate({
  //     opacity: 1,
  //   }).on('vmousecancel', function() {
  //     $(this).find('div.beers-list-text').attr("class", "display-none")
  //   })
  // })

// mobile navigation menu drop down
  $('.toggle-nav').on("click", function(e) {
    if ($('.logged-in-nav').attr('class') === 'logged-in-nav active') {
      $('.logged-in-nav').slideDown(600).toggleClass('active');
    } else {
      $('.logged-in-nav').slideUp(600).toggleClass('active');
    }

    if ($('.logged-out-nav').attr('class') === 'logged-out-nav active') {
      $('.logged-out-nav').slideDown(600).toggleClass('active')
    } else {
      $('.logged-out-nav').slideUp(600).toggleClass('active')
    }
    e.preventDefault();
  });

  // displaying map on bottom of page
  $('#foundBars > a').on("click", function(e){
    e.preventDefault();
    $("#barMap").html("")
    $.ajax({
      url: $(this).attr("href"),
      method: "GET",
      dataType: "html",
    }).done(function(data){
      $("#barMap").append(data);
      console.log("SUCCESS");
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

    }).fail(function(data){
      console.log("FAIL");
    });
  });
})
