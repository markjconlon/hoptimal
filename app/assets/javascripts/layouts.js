$(document).ready(function() {

  var login = $('.logged-out-nav a:first');
  var signup = $('.logged-out-nav a:last');
  modalLogin = $('.modal-login')
  modalSignup = $('.modal-signup')

// =====MODAL WINDOW FOR LOGIN====
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

  // =====MODAL WINDOW FOR SIGNUP====
  // $(signup).on('click', function(e) {
  //   // e.stopPropogation();
  //   e.preventDefault();
  //   console.log('click signup');
  //   modalSignup.fadeIn();
  // });
  //
  // modalSignup.on('click', function(e) {
  //   $(this).fadeOut();
  // });

// ====MODAL WINDOW FADES WHEN HITTING THE ESC KEY====
  $(document).keyup(function(event){
      if(event.which=='27'){
        modalLogin.fadeOut();
        modalSignup.fadeOut();
      }
    });

// ====SUBMIT SIGN UP FORM THROUGH AJAX====
    // $('#signup-form').on('submit', function() {
    //   $.ajax({
    //     url: '/users'
    //     method: $(this).attr('action');
    //     data: {params[:user]}
    //     dataType: 'html'
    //   }).done(function(data) {
    //
    //   })
    // })

});
