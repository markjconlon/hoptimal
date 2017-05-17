$(document).ready(function() {

  var login = $('.logged-out-nav a:first');
  var signup = $('.logged-out-nav a:last');
  modalLogin = $('.modal-login')
  modalSignup = $('.modal-signup')

  $(login).on('click', function(e) {
    // e.stopPropogation();
    e.preventDefault();
    modalLogin.fadeIn();
  });

  $('.users-form').on('click', function(e) {
    e.stopPropagation();
  })

  modalLogin.on('click', function(e) {
    $(this).fadeOut();
  });

  $(signup).on('click', function(e) {
    // e.stopPropogation();
    e.preventDefault();
    console.log('click signup');
    modalSignup.fadeIn();
  });

  $('.users-form').on('click', function(e) {
    e.stopPropagation();
  })

  modalSignup.on('click', function(e) {
    $(this).fadeOut();
  });

  $(document).keyup(function(event){
      if(event.which=='27'){
        modalLogin.fadeOut();
        modalSignup.fadeOut();
      }
    });


    })

});
