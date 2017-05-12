// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
// require turbolinks (removed = sign not using turbolinks)
//= require_tree .

$(function(){
$("#randomize_button").click(function(e){
  e.preventDefault();
  console.log("hello")
  // console.log($(this));

  url = $(this).attr('href')

  $.ajax({
    url: url,
    method: "GET",
    // data: ,
    dataType: 'json'
  }).done(function(data){
    console.log("request successful");
    console.log(data);
    $('<div>').html('Passed').appendTo("#random_beer_container");
  }).fail(function(){
    console.log("request not completed");
    $('<img>').attr('src',"http://beerme.se/wp-content/uploads/2015/02/lorem_wipa.png").appendTo("#random_beer_photo")
    $('<div>').html('Failed').appendTo("#random_beer_container");
  }).always(function(){
    console.log(".ajax request completed");
  })
})



})


$('#beer_image').on('click',function(){
  $('#beer_image').fadeOut("slow", function(){

  })
})
