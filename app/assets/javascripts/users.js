// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// random function button
$(function(){
  $("#randomize_button").click(function(e){
    e.preventDefault();
    $.ajax({
      url: "/beers/random",
      method: "GET",
      // data: {},
      dataType: 'json'
    }).done(function(data){
      $("#randomize_button").text("Try Another?")
      // clears the beers before reloading
      $('#random_beer_info').html('')
      $('#random_beer_title').html('')
      $('#random_beer_style').html('')
      $('#random_beer_taste').html('')
      $('#random_beer_link').html('')

      $('#random_beer_default').hide()
      $('.box1').fadeIn('slow').show()
      $('.box3').fadeIn('slow').show()
      $('#random_beer_link').fadeIn('slow').show()

      // beer image
      // validates the presence of a photo. (if image is empty string "== null" will not work). use of ! instead. place holder image added for null value beers
      if (!data.image_url) {
          $('<img>').fadeIn('slow').attr('src',"http://68.media.tumblr.com/acf0658d2bb2e1414c474fd21f06f53f/tumblr_opugo1GTpi1tkwkuro1_250.jpg" ).prependTo("#random_beer_info")
      } else {
      $('<img>').addClass("beer_img").fadeIn('slow').attr('src', data.image_url).prependTo("#random_beer_info");
    }

      // beer info & add to list link
      // Beer Name
      $('<h2>').fadeIn('slow').html('Name:').appendTo("#random_beer_title");
      $('<p>').fadeIn('slow').html(data.name).appendTo("#random_beer_title");

      // Beer Style
      $('<h3>').fadeIn('slow').html('Style:').appendTo('#random_beer_style');
      $('<p>').fadeIn('slow').html(data.varietal).appendTo('#random_beer_style');

      // Beer Tasting note
      $('<h3>').fadeIn('slow').html('Tasting Note:').appendTo("#random_beer_taste");
      if (!data.tasting_note) {
        $('<p>').fadeIn('slow').html('No Tasting Note Available... But it\'s worth a try!').appendTo("#random_beer_taste");
      }else {
        $('<p>').fadeIn('slow').html(data.tasting_note).appendTo("#random_beer_taste");
      }

      // Link to Beer
      $('<a>').fadeIn('slow').attr("href","/beers/"+ data.id ).text('Add to My Beers list').appendTo("#random_beer_link");


      // Random Button and Notification Header
      $("#random_beer_notification").text("Doesn't meet your tastes? Feel free to try another!")
      $("#random_beer_container")

    }).fail(function(){
      $('<img>').attr('src',"https://cdn.dribbble.com/users/221092/screenshots/2331669/beer_dribbble.jpg").prependTo("#random_beer_photo")
      $('<div>').html('Failed').prependTo("#random_beer_container");
    }).always(function(){
    })
  });



  // select new preference beer
  $('#preference_button').click(function(e){
    e.preventDefault();

    $.ajax({
      url: "/beers/random/preference",
      method: "GET",
      dataType: "json"
    }).done(function(data){
      //
      $('#preference_beer_info').html('')
      $('#preference_beer_title').html('')
      $('#preference_beer_style').html('')
      $('#preference_beer_taste').html('')
      $('#preference_beer_link').html('')

      // Preference Beer Image
      if (!data.image_url) {
        $('<img>').fadeIn('slow').attr('src',"http://68.media.tumblr.com/acf0658d2bb2e1414c474fd21f06f53f/tumblr_opugo1GTpi1tkwkuro1_250.jpg" ).prependTo('#preference_beer_info')
      }else {
      $('<img>').addClass("beer_img").attr('src', data.image_url).fadeIn('slow').appendTo('#preference_beer_info')
      }

      // Preference Beer Name
      $('<h2>').fadeIn('slow').html('Name:').appendTo("#preference_beer_title");
      $('<p>').html(data.name).fadeIn('slow').appendTo('#preference_beer_title')

      // Preference Beer Style
      $('<h3>').fadeIn('slow').html('Style:').appendTo('#preference_beer_style');
      $('<p>').fadeIn('slow').html(data.varietal).appendTo('#preference_beer_style');

      // Preference Beer Tasting Notes
      $('<h3>').fadeIn('slow').html('Tasting Note:').appendTo("#preference_beer_taste");
      if (!data.tasting_note) {
        $('<p>').fadeIn('slow').html('No Tasting Note Available... But it\'s in your comfort zone!').appendTo("#preference_beer_taste");
      }else {
        $('<p>').fadeIn('slow').html(data.tasting_note).appendTo("#preference_beer_taste");
      }

      // Preference Beer Link
      $('<a>').fadeIn('slow').attr("href","/beers/"+ data.id).text('Add to list').appendTo("#preference_beer_link");

      // Preference Beer Notification
      $('#preference_beer_notification').fadeIn('slow').show()

    }).fail(function(){
      $('<img>').attr('src',"https://cdn.dribbble.com/users/221092/screenshots/2331669/beer_dribbble.jpg").prependTo("#random_beer_photo")
      $('<div>').html('Failed').prependTo("#random_beer_container");

    }).always(function(){

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
    if (top > height) {
      if (!btt.is(':visible')) {
        btt.fadeIn();
      }
      else {
        btt.hide();
      }
    }
  })

  $('#random_beer_link').hide()
  $('.box1').hide()

}) // this is the end
