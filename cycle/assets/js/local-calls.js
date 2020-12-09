$(document).ready(function() {

$('.gallery').cycle({
		fx: 'toss', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		speed: 1000,		//1 second between transitions
		timeout: 1000,		//1 second to transition
		random: 1,
		pause: 1
	});

});