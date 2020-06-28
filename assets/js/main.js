(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		$(".hero-slide").owlCarousel({
			items:1,
			loop:true,
			nav:false,
			dots:false,
			autoplay:true,
			animateOut:'fadeOut'
		});


		$("#jackpot").animateNumbers(500000000, true, 10000);

		$("#jackpott").animateNumbers(500000000, true, 10000);


		$(".menubar").click(function(){
		    $(".mobile-menu-view").toggle();
		  });





	});


	jQuery(window).load(function () {


	});


}(jQuery));
