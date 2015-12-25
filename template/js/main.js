// do something
$(document).ready(function(){
  $('.bxslider').bxSlider({
  	auto: true,
  	controls: false,
  	pager: false,
		speed: 1200,
		pause: 6000
  });
  $('header .bxslider li').not(':first').delay(2000).css('display','block');
});