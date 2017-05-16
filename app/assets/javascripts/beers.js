$(document).ready(function(){

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
    })
  });

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

})
