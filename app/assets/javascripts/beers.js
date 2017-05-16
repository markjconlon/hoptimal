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

})
