// JavaScript Document
$('.slider').slick({
	autoplay: true,
	autoplayspeed: 3000,
	speed: 1000,
	infinite: true,
	slidesToshow: 1,
	slidesToscroll: 1,
	arrows: true,
	prevArow: '<div class="slick-prev"></div>',
	nextArow: '<div class="slick-next"></div>',
	dots: true,
	pauseOnForcus: false,
	pauseOnHover: false,
	pauseOnDotsHover: false,
});

$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide)){
				$('.slider').slick('slickPlay');
				});