$(document).ready(function() {

	$('.gallery').cycle({
		width: '100%',
		fit: 1,
		fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		speed: 1500,		//1.5 seconds between transitions
		timeout: 3000,		//3 seconds to transition
		pause: 1
	});
	

});