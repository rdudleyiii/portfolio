if (Meteor.isClient) {
	Template.index.events = {
		'click .masthead-nav li, click .masthead-brand a, click .toTop' : function(e){
			var $this = $(e.target);

			if (!$this.hasClass('toTop')) {
				$('.active').removeClass('active');
				$this.parent().addClass('active');
			}

			$('html, body').scrollTo(("." + $this.attr('data-scroller')), 500);
		}
	}

	Template.index.rendered = function(){
		new WOW().init()
	} 
  		
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}