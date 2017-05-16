// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// random function button
$(function(){
  $("#randomize_button").click(function(e){
    e.preventDefault();
    console.log("hello")
    $.ajax({
      url: "/beers/random",
      method: "GET",
      // data: {},
      dataType: 'json'
    }).done(function(data){
      console.log("request successful");
      console.log(data);
      $("#randomize_button").text("Try Another?")
      // clears the beers before reloading
      $('#random_beer_info').html("")

      // beer image
      // validates the presence of a photo. (if image is empty string "== null" will not work). use of ! instead. place holder image added for null value beers
      if (!data.image_thumb_url) {
          $('<img>').fadeIn('slow').attr('src',"https://www.spreadshirt.com/image-server/v1/designs/1007234840,width=178,height=178/404-beer-not-found-hoodie.png" ).prependTo("#random_beer_info")
      }else {
      $('<img>').fadeIn('slow').attr('src', data.image_thumb_url).prependTo("#random_beer_info");
    }

      // beer info & add to list link
      $('<p>').fadeIn('slow').html(data.name).appendTo("#random_beer_info");
      $('<a>').fadeIn('slow').attr("href","/beers/"+`${data.id}`).text('Add to list').appendTo("#random_beer_info");

      // random button and notification header
      $("#random_beer_notification").text("Doesn't meet your tastes? Feel free to try another!")
      $("#random_beer_container")

    }).fail(function(){
      console.log("request not completed");
      $('<img>').attr('src',"https://cdn.dribbble.com/users/221092/screenshots/2331669/beer_dribbble.jpg").prependTo("#random_beer_photo")
      $('<div>').html('Failed').prependTo("#random_beer_container");
    }).always(function(){
      console.log(".ajax request completed");

    })
  });



  // select new preference beer
  $('#preference_button').click(function(e){
    e.preventDefault();
    // $("#preference_beer_info").height(450)
    $.ajax({
      url: "/beers/random/preference",
      method: "GET",
      dataType: "json"
    }).done(function(data){
      console.log('.ajax request successful');
      console.log(data);
      $('#preference_beer_info').html("")
      if (!data.image_thumb_url) {
        $('<img>').fadeIn('slow').attr('src',"https://www.spreadshirt.com/image-server/v1/designs/1007234840,width=178,height=178/404-beer-not-found-hoodie.png" ).prependTo('#preference_beer_info')
      }else {
      $('<img>').attr('src', data.image_thumb_url).fadeIn('slow').appendTo('#preference_beer_info')
      }
      $('<p>').html(data.name).fadeIn('slow').appendTo('#preference_beer_info')
      $('<a>').fadeIn('slow').attr("href","/beers/"+`${data.id}`).text('Add to list').appendTo("#preference_beer_info");

    }).fail(function(){
      console.log(".ajax request failed");
      $('<img>').attr('src',"https://cdn.dribbble.com/users/221092/screenshots/2331669/beer_dribbble.jpg").prependTo("#random_beer_photo")
      $('<div>').html('Failed').prependTo("#random_beer_container");

    }).always(function(){
      console.log('request completed');

    })
  });

  // back to top function added
var btt = $('.back-to-top')

  btt.on('click', function(e){
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    e.preventDefault();
  });

  $(window).on('scroll', function (){
    var self = $(this),
    height = self.height(),
    top = self.scrollTop();
    // console.log(height);
    // console.log(top);
    if (top > height) {
      if (!btt.is(':visible')) {
        btt.fadeIn();
      }
      else {
        btt.hide();
      }
    }
  })



}) // this is the end
