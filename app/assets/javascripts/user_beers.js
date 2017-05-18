// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){

// Filters beers index page based on user input typed within the search field
  $("#search-field").on('keyup', function(e){
    $.ajax({
      url: "/user_beers",
      method: "POST",
      data: {
        "q": {
          "user_beer_name_cont": $("#search-field").val()
        }
      },
      dataType: 'html'
    }).done(function(data) {
    });
  });
})
