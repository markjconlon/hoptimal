$(function(){

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
})
