$(document).ready(function() {
	
	$('a').hover(function() {
		$(this).animate({
			opacity: 0.25
		}, 500)
	}, function(){
		$(this).animate({
			opacity: 1
		});
	});

});