(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		// Accordian

		$(".card-header").click(function(){
			// self clicking close
			if($(this).next(".card-body").hasClass("active")){
			  $(this).next(".card-body").removeClass("active").slideUp().parents(".accordian-card").removeClass("brd");
			}
		  else{
			$(".accordian-card .card-body").removeClass("active").slideUp().parents(".accordian-card").removeClass("brd");
			$(this).next(".card-body").addClass("active").slideDown().parents(".accordian-card").addClass("brd");
		   }
		   });
		   jQuery(".card-body.active").parents(".accordian-card").addClass("brd");

		//    Owl Carousel

		//   carousel

		$("#owl-csel1").owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 3000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<i class="fa-solid fa-arrow-left"></i>',
						'<i class="fa-solid fa-arrow-right"></i>'
					],
			navContainer: '.main-content .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 1,						
				},
				768: {
					items: 2,
				},
				992: {
					items: 3,
				},
				1200: {
					items: 4,						
				}
			}

		});

		// testimonial


		$('.main-carousel').flickity({				
			// options
			cellAlign: 'center',
			contain: true,
			groupCells: true,
			freeScroll: true,
			wrapAround: true,
			groupCells: 1,
			// groupCells: '100%',
		   autoPlay: true,
		   // autoPlay: 1500,
		   pauseAutoPlayOnHover: false,
		   initialIndex: 1,
		   wrapAround: true,
		   prevNextButtons: true,
		   pageDots: true
		  });

		// $("#owl-csel2").owlCarousel({
		// 	items: 4,
		// 	autoplay: true,
		// 	autoplayTimeout: 3000,
		// 	startPosition: 0,
		// 	rtl: true,
		// 	loop: true,
		// 	margin: 15,
		// 	dots: false,
		// 	nav: true,
		// 	navText: [
		// 				'<i class="fa fa-angle-left" aria-hidden="true"></i>',
		// 				'<i class="fa-solid fa-arrow-right"></i>'
		// 			],
		// 	navContainer: '.main-content2 .custom-nav',
		// 	responsive:{
		// 		0: {
		// 			items: 1,						
		// 		},
		// 		767: {
		// 			items: 1,						
		// 		},
		// 		1200: {
		// 			items: 1,						
		// 		}
		// 	}

		// });




		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);