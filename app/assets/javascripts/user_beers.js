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
    });
  })

  $('.beer_consumed.user-beers-list').mouseover(function() {
    $(this).find('div.beer_info').animate({
      opacity: 1,
    })
  }).mouseleave(function() {
    $(this).find('div.beer_info').animate({
      opacity: 0,
  });
  });


  var allStarRatings = $('.star-rating-user-beers');
  for (var i = 0; i < allStarRatings.length; i++) {
    rating = allStarRatings[i].innerText;
    allStarRatings[i].innerHTML = ''
    for (var x = 0; x < rating; x++) {
      $('<i>').attr("class", "fa fa-star").appendTo(allStarRatings[i])
    }
  }

})
