$(function(){
	var _window = $( window ),
		scrollTime = 0.5,
		scrollDistance = 125;

    _window.on("mousewheel DOMMouseScroll", function(event){
        event.preventDefault();
	 	var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3,
             scrollTop = _window.scrollTop(),
             finalScroll = scrollTop - parseInt( delta * scrollDistance );

        console.log(event, delta, scrollTop, finalScroll);

	 	var tweenMax = new TweenMax.to( _window, scrollTime, {
			 scrollTo : { y: finalScroll, autoKill:true },
			 ease: Power1.easeOut,
			 overwrite: 5
	 	});
	});
});