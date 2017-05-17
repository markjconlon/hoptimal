$(document).ready(function() {

  var login = $('.logged-out-nav a:first');
  var signup = $('.logged-out-nav a:last')

  $(login).on('click', function(e) {
    // e.stopPropogation();
    e.preventDefault();
    console.log('click login');
    $('.modal-login').fadeIn();
  });


});
