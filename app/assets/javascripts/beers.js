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
    $.ajax({
      url: $(this).attr("href"),
      method: "GET",
      dataType: "html",
    }).done(function(data){
      $("#barMap").append(data);
      console.log("SUCCESS");
      console.log($('.foundBars', this).attr("href"));
    }).fail(function(data){
      console.log("FAIL");
    });
  });
})
