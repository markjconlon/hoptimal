// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){

$("#randomize_button").on('click',function(){
  event.preventDefault();

  console.log($(this));
    url = $(this).attr('href'),
    $.ajax({
            url: url,
            method: 'GET',
            // data: ,
            dataType: 'json'
  }).done(function(data){

    // t.string   "name"
    // t.string   "image_url"
    // t.string   "image_thumb_url"

    var beerContainer = $('<div>');
    console.log("uhhhhhh");
    $('<h2>').html(data.name).appendTo(beerContainer);




  }).fail(function(){
    alert('Error: Unable to complete the Request.')

  }).always(function(){
    console.log(".ajax request completed");
    // $("#randomize_button").text("Don't Like It? Try Another!");
    $('<img>').attr('src',"https://dummyimage.com/238x320/7ed126/0011ff.png").appendTo('#random_beer_photo')
    $('#random_beer_container').append("Hello");


  })
 })
});
