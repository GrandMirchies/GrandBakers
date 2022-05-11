 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlideone');
	$homeslide = $('.homeSlide'); 
	$beverageshomeSlide = $('.beverageshomeSlide');
	$snackshomeSlide = $('.snackshomeSlide');
	$snacksmenuhomeSlide = $('.snacksmenuhomeSlide');
	$icecreammenuhomeSlide = $('.icecreammenuhomeSlide');
	$icecreammenushomeSlide =$('.icecreammenushomeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		}   
	    // Resize our slides
		$slide.height(600);
		$homeslide.height(600); 
		$beverageshomeSlide.height(617);
		$snackshomeSlide.height(530);
		$snacksmenuhomeSlide.height(690);
		$icecreammenuhomeSlide.height(650);
		$icecreammenushomeSlide.height(725);
	    // Refresh Skrollr after resizing our sections 
	    
	}
		
} )( jQuery );