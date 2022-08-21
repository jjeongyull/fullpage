$(function(){
    $('#fullpage').fullpage({
		//options here
        // navigation: true,
		// navigationTooltips: ['CEO', 'BUSINESS', 'CLIENT','CONTACT US'],
		showActiveTooltip: true,
        navigationPosition:"left",
		anchors:['section1', 'section2', 'section3','section4'],
		controlArrows: false,
		verticalCentered: false,
		'afterLoad': function(anchorLink, index){
			if (index == 1) {
				$('.navigation li a').removeClass('active');
				$('.navigation li span').removeClass('active');	
		} else if(index == 2) {
			$('.navigation li a').removeClass('active');
			$('.navigation li span').removeClass('active');	
			$('.clientPage .clientText .bar').removeClass('active');
		} else if (index == 3) {
			$('.clientPage .clientText .bar').addClass('active');		
			$('.navigation li a').addClass('active');		
			$('.navigation li span').addClass('active');		
		} else  if(index == 4){
			$('.navigation li a').removeClass('active');
			$('.navigation li span').removeClass('active');	
			$('.clientPage .clientText .bar').removeClass('active');
		};
	}
		
	});

	$('header .hamburger-button').click(function(){
		$(this).toggleClass('active');
		$('header .overlay').toggleClass('overflow');

	});

	const animation = document.querySelectorAll(".clientPage .scrollBox .clients")
	$(document).ready(function(){
		$(".scrollBox").hover(function(){
			$(animation).addClass('active');
		},
			function(){
				$(animation).removeClass('active');
			});
			});




	const swiper = new Swiper('.swiper-no-swiping', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		loopAdditionalSlides: 1,
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		}
	  });
	  const swiper2 = new Swiper('.swiper2', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		loopAdditionalSlides: 1,
		slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  }
	  });
});











