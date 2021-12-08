jQuery(document).ready(function($) {
	$(".active-carousel").owlCarousel({
		items: 4,
		margin: 30,
		loop: true,		
    	//animateIn: 'flipInX',
		//animateOut: 'slideOutDown',
		navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'] ,
		nav: true,
		autoplay: true,
	});

});