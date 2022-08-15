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
		afterLoad: function(anchorLink, index){
			
			
		}
		
	});

	$('header .hamburger-button').click(function(){
		$(this).toggleClass('active');
		$('header .overlay').toggleClass('overflow');

	});

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true
		},
	  
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
		slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  }
	  });
});











