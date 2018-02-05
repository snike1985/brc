$(function(){
	var target = $(document.body);
	var scrollTime = 0.5;
	var scrollDistance = 125;
	 $(window).on("mousewheel DOMMouseScroll", function(event){
		event.preventDefault();
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = target.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
		TweenMax.to(target,scrollTime,{scrollTo:{y:finalScroll},ease:Power1.easeOut,overwrite:5});
	});
});
