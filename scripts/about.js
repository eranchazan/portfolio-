$(document).ready(function() {
	
	$('#left a.about').hover(function() {
		$(this).animate({
			opacity: 0.25
		}, 500)
	}, function(){
		$(this).animate({
			opacity: 1
		});
	});

});