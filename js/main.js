$(window).scroll(function(){
  if($(this).scrollTop() > 10 ) {
    $('nav').addClass('navbar-scroll');
    $('nav').removeClass('nav-nothing');
  } else {
    $('nav').addClass('nav-nothing');
    $('nav').removeClass('navbar-scroll');
  }

});
