$(function () {
  "use strict";

  // Smooth Scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
	  speed: 999,
	  speedAsDuration: true
  });

  // Sticky Header
  $(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('header').addClass('my-nav');
  }
  else
  {
    $('header').removeClass('my-nav');
  }
  });

  // wow JS
  new WOW().init();

  // activeClass JS
  $('.navbar-nav li').on('click',function(){
    $('li').removeClass('active');
    $(this).addClass('active')
  });

})(jQuery);