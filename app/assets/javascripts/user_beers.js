// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){

// Filters beers index page based on user input typed within the search field
  $("#search-field-ub").on('keyup', function(e){
    $.ajax({
      url: "/user_beers/search",
      method: "POST",
      data: {
        "q": {
          "name_cont": $("#search-field-ub").val()
        }
      },
      dataType: 'html'
    }).done(function(data) {
      $("#search-beers-ub").html(data);

      $('.all-beers-list').mouseover(function() {
        $(this).find('div.beers-list-text').animate({
          opacity: 1,
        })
      }).mouseleave(function() {
        $(this).find('div.beers-list-text').animate({
          opacity: 0,
    });
  });
})

})
})
