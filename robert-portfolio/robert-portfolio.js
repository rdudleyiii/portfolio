if (Meteor.isClient) {
	$('#photos-link').closest('li').on('click', function() {
		console.log('photos clicked');
		$(this).addClass('active');
		$('html, body').scrollTo(('.marketing'), 1500);
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