$(function(){
	var target = $(document.body);
	var scrollTime = 0.75;
	var scrollDistance = 240;
	 $(window).on("mousewheel DOMMouseScroll", function(event){
         console.log('scrolled')
		event.preventDefault();
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = target.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
		TweenMax.to(target,scrollTime,{scrollTo:{y:finalScroll},ease:Power1.easeOut,overwrite:5});
	});

});
