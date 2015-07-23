if (Meteor.isClient) {
	$('#photos-link').on('click', function() {
		$(this).closest('li').addClass('active');
		$('html, body').animate({
			scrollTo: $('#mygallery')
		}, 1500);
	});	
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

// Template.index.rebdered = function(){

// }


// var portfolio = function() {
// 	$(function() {
// 		alert('loaded');
// 	});
// }(jQuery);