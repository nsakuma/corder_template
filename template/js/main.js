// do something
$(document).ready(function(){
	var slide = $('.bxslider').bxSlider({
		auto: true,
		controls: false,
		pager: false,
		speed: 1000,
		minSlides: 2,
		moveSlides: 2,
		onSlideAfter: function(){
			slide.startAuto();
		}
	});
});
