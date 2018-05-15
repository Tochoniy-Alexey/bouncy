$(function() {

// head button to second section
	$(".header__button").click(function() {
		$("html, body").animate({
			scrollTop : $(".portfolio").offset().top
		}, 1000);
	});
// "contact button"  to "contact" section
	$(".contact__button").click(function() {
		$("html, body").animate({
			scrollTop : $("#contact").offset().top
		}, 1000);
	});

// slider1
		var swiper = new Swiper('.swiper-container', {

      direction: 'vertical',
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: '40',
      },
      mousewheel: true,

      pagination: {
        el: '.swiper-pagination',
        progressbarOpposite: true,
        clickable: true,
      },
    });

// isotop
				var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		});
		// filter functions
		var filterFns = {
		  // show if number is greater than 50
		  // numberGreaterThan50: function() {
		  //   var number = $(this).find('.number').text();
		  //   return parseInt( number, 10 ) > 50;
		  // },
		  // show if name ends with -ium
		  // ium: function() {
		  //   var name = $(this).find('.name').text();
		  //   return name.match( /ium$/ );
		  // }
		};
		// bind filter button click
		$('.filters-button-group').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-filter');
		  // use filterFn if matches value
		  filterValue = filterFns[ filterValue ] || filterValue;
		  $grid.isotope({ filter: filterValue });
		});
		// // change is-checked class on buttons
		// $('.button-group').each( function( i, buttonGroup ) {
		//   var $buttonGroup = $( buttonGroup );
		//   $buttonGroup.on( 'click', 'button', function() {
		//     $buttonGroup.find('.is-checked').removeClass('is-checked');
		//     $( this ).addClass('is-checked');
		//   });
		// });

// masonry
		$('.grid').masonry({
				  // options
				  itemSelector: '.grid-item',
				  columnWidth: '.grid-item',
				});

// slider2
		$('.slick-slider').slick({
			 dots: true,
       autoplay: true,
       autoplaySpeed: 4000,
       arrows: false,
      });

// scroll menu button to sections		 
			$('a[href^="#"]').bind("click", function(e){
			  var anchor = $(this);
			   $('html, body').stop().animate({
			    scrollTop: $(anchor.attr("href")).offset().top
			     }, 1000);
			      e.preventDefault(); 
			    }); 
			 return false;﻿


});

