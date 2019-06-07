/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();
	// ok
		var counterWayPoint = function() {
			if ($('#colorlib-counter').length > 0 ) {
				$('#colorlib-counter').waypoint( function( direction ) {
											
					if( direction === 'down' && !$(this.element).hasClass('animated') ) {
						setTimeout( counter , 400);					
						$(this.element).addClass('animated');
					}
				} , { offset: '90%' } );
			}
		};
	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

				
			$(document).ready(function(){ 
				$(window).scroll(function(){ 
					if ($(this).scrollTop() > 100) { 
						$('#scroll').fadeIn(); 
					} else { 
						$('#scroll').fadeOut(); 
					} 
				}); 
				$('#scroll').click(function(){ 
					$("html, body").animate({ scrollTop: 0 }, 600); 
					return false; 
				}); 
			});
			var isMobile = {
				Android: function() {
					return navigator.userAgent.match(/Android/i);
				},
					BlackBerry: function() {
					return navigator.userAgent.match(/BlackBerry/i);
				},
					iOS: function() {
					return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
					Opera: function() {
					return navigator.userAgent.match(/Opera Mini/i);
				},
					Windows: function() {
					return navigator.userAgent.match(/IEMobile/i);
				},
					any: function() {
					return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				}
			};
		
			var fullHeight = function() {
		
				if ( !isMobile.any() ) {
					$('.js-fullheight').css('height', $(window).height());
					$(window).resize(function(){
						$('.js-fullheight').css('height', $(window).height());
					});
				}
		
			};
		
		
			var counter = function() {
				$('.js-counter').countTo({
					 formatter: function (value, options) {
				  return value.toFixed(options.decimals);
				},
				});
			};
		
		
			var counterWayPoint = function() {
				if ($('#colorlib-counter').length > 0 ) {
					$('#colorlib-counter').waypoint( function( direction ) {
												
						if( direction === 'down' && !$(this.element).hasClass('animated') ) {
							setTimeout( counter , 400);					
							$(this.element).addClass('animated');
						}
					} , { offset: '90%' } );
				}
			};
		
			// Animations
			var contentWayPoint = function() {
				var i = 0;
				$('.animate-box').waypoint( function( direction ) {
		
					if( direction === 'down' && !$(this.element).hasClass('animated') ) {
						
						i++;
		
						$(this.element).addClass('item-animate');
						setTimeout(function(){
		
							$('body .animate-box.item-animate').each(function(k){
								var el = $(this);
								setTimeout( function () {
									var effect = el.data('animate-effect');
									if ( effect === 'fadeIn') {
										el.addClass('fadeIn animated');
									} else if ( effect === 'fadeInLeft') {
										el.addClass('fadeInLeft animated');
									} else if ( effect === 'fadeInRight') {
										el.addClass('fadeInRight animated');
									} else {
										el.addClass('fadeInUp animated');
									}
		
									el.removeClass('item-animate');
								},  k * 200, 'easeInOutExpo' );
							});
							
						}, 100);
						
					}
		
				} , { offset: '85%' } );
			};
		
		
			var burgerMenu = function() {
		
				$('.js-colorlib-nav-toggle').on('click', function(event){
					event.preventDefault();
					var $this = $(this);
		
					if ($('body').hasClass('offcanvas')) {
						$this.removeClass('active');
						$('body').removeClass('offcanvas');	
					} else {
						$this.addClass('active');
						$('body').addClass('offcanvas');	
					}
				});
		
		
		
			};
		
			// Click outside of offcanvass
			var mobileMenuOutsideClick = function() {
		
				$(document).click(function (e) {
				var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
				if (!container.is(e.target) && container.has(e.target).length === 0) {
		
					if ( $('body').hasClass('offcanvas') ) {
		
						$('body').removeClass('offcanvas');
						$('.js-colorlib-nav-toggle').removeClass('active');
					
					}
					
				}
				});
		
				$(window).scroll(function(){
					if ( $('body').hasClass('offcanvas') ) {
		
						$('body').removeClass('offcanvas');
						$('.js-colorlib-nav-toggle').removeClass('active');
					
					}
				});
		
			};
		
			var clickMenu = function() {
		
				$('#navbar a:not([class="external"])').click(function(event){
					var section = $(this).data('nav-section'),
						navbar = $('#navbar');
		
						if ( $('[data-section="' + section + '"]').length ) {
							$('html, body').animate({
								scrollTop: $('[data-section="' + section + '"]').offset().top - 55
							}, 500);
					   }
		
					if ( navbar.is(':visible')) {
						navbar.removeClass('in');
						navbar.attr('aria-expanded', 'false');
						$('.js-colorlib-nav-toggle').removeClass('active');
					}
		
					event.preventDefault();
					return false;
				});
		
		
			};
		
			// Reflect scrolling in navigation
			var navActive = function(section) {
		
				var $el = $('#navbar > ul');
				$el.find('li').removeClass('active');
				$el.each(function(){
					$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
				});
		
			};
		
			var navigationSection = function() {
		
				var $section = $('section[data-section]');
				
				$section.waypoint(function(direction) {
					  
					  if (direction === 'down') {
						navActive($(this.element).data('section'));
					  }
				}, {
					  offset: '150px'
				});
		
				$section.waypoint(function(direction) {
					  if (direction === 'up') {
						navActive($(this.element).data('section'));
					  }
				}, {
					  offset: function() { return -$(this.element).height() + 155; }
				});
		
			};
		
		
		
		
		
		
			var sliderMain = function() {
				
				  $('#colorlib-hero .flexslider').flexslider({
					animation: "fade",
					slideshowSpeed: 5000,
					directionNav: true,
					start: function(){
						setTimeout(function(){
							$('.slider-text').removeClass('animated fadeInUp');
							$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
						}, 500);
					},
					before: function(){
						setTimeout(function(){
							$('.slider-text').removeClass('animated fadeInUp');
							$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
						}, 500);
					}
		
				  });
		
			};
		
			var stickyFunction = function() {
		
				var h = $('.image-content').outerHeight();
		
				if ($(window).width() <= 992 ) {
					$("#sticky_item").trigger("sticky_kit:detach");
				} else {
					$('.sticky-parent').removeClass('stick-detach');
					$("#sticky_item").trigger("sticky_kit:detach");
					$("#sticky_item").trigger("sticky_kit:unstick");
				}
		
				$(window).resize(function(){
					var h = $('.image-content').outerHeight();
					$('.sticky-parent').css('height', h);
		
		
					if ($(window).width() <= 992 ) {
						$("#sticky_item").trigger("sticky_kit:detach");
					} else {
						$('.sticky-parent').removeClass('stick-detach');
						$("#sticky_item").trigger("sticky_kit:detach");
						$("#sticky_item").trigger("sticky_kit:unstick");
		
						$("#sticky_item").stick_in_parent();
					}
					
		
					
		
				});
		
				$('.sticky-parent').css('height', h);
		
				$("#sticky_item").stick_in_parent();
		
			};
		
			var owlCrouselFeatureSlide = function() {
				$('.owl-carousel').owlCarousel({
					animateOut: 'fadeOut',
				   animateIn: 'fadeIn',
				   autoplay: true,
				   loop:true,
				   margin:0,
				   nav:true,
				   dots: false,
				   autoHeight: true,
				   items: 1,
				   navText: [
					  "<i class='icon-arrow-left3 owl-direction'></i>",
					  "<i class='icon-arrow-right3 owl-direction'></i>"
					 ]
				})
			};
		
			// Document on load.
			$(function(){
				fullHeight();
				counter();
				counterWayPoint();
				contentWayPoint();
				burgerMenu();
		
				clickMenu();
				// navActive();
				navigationSection();
				// windowScroll();
		
		
				mobileMenuOutsideClick();
				sliderMain();
				stickyFunction();
				owlCrouselFeatureSlide();
			});

})(jQuery);