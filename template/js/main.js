// do something
$(document).ready(function(){
	var slider = $('.bxslider').bxSlider({
		auto: true,
		controls: false,
		pager: false,
		speed: 1200,
		onSlideAfter: function (){
			slider.startAuto();
		}
	});
});