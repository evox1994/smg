$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
		$('.mobile-menu .nav li.li-drop').removeClass('active');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$('.face-slider').slick();

	$('.b-about-slider').slick();

	$('.b-doctors-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 460,
				settings:{
					slidesToShow: 1
				}
			}
		]
	});

	$(document).on('click','.filter li',function(){
		var fil = $(this).attr('data-filter');

		if ( !$(this).hasClass('active') ){
			$(this).parents('.filter').find('li').removeClass('active');
			$(this).parents('.filter-wrap').find('.filter-item').removeClass('active');
			$(this).addClass('active');
			$(fil).addClass('active');
			$(this).parents('.filter-select').find('.filter-select-text span').text($(this).find('span').text());
		}
		$(this).parents('.filter-select').removeClass('active');
	});

	$(document).on('click','.filter-select-text',function(){
		$(this).parents('.filter-select').toggleClass('active');
	});

	$(document).on('click',function(e){
		var container = $('.filter-select');
		if ( container.has(e.target).length === 0 ){
			container.removeClass('active');
		}
	});

	$(document).on('click','.footer-nav .item .item-title',function(){
		var eh = $(this).parents('.item').find('.item-wrap').innerHeight() + 10;
		
		$(this).parents('.item').toggleClass('active');
		if ( $(this).parents('.item').hasClass('active') ){
			$(this).parents('.item').find('.item-content').animate({'height': eh},300);
		} else {
			$(this).parents('.item').find('.item-content').animate({'height': 0},300);
		}
	});

	$(document).on('click','.qwestion',function(){
		var eh = $(this).parents('li').find('.answer .text').outerHeight();
		
		$(this).parents('li').toggleClass('active');
		if ( $(this).parents('li').hasClass('active') ){
			$(this).parents('li').find('.answer').animate({'height': eh},300);
		} else {
			$(this).parents('li').find('.answer').animate({'height': 0},300);
		}
	});

	$(document).on('click','.drop-cat li',function(){
		var el = $(this).attr('data-cat');

		if ( !$(this).hasClass('active') ){
			$(this).parents('.drop-cat').find('li').removeClass('active');
			$(this).parents('.wrap').find('.drop-item').removeClass('active');
			$(this).addClass('active');
			$(el).addClass('active');
		}
	});

	$(document).on('click','.mobile-menu .nav li.li-drop span',function(){
		$(this).parent().addClass('active');
	});

	$(document).on('click','.drop-back',function(){
		$(this).parent().parent().removeClass('active');
	});

	$(document).on('click','.scroll-btn',function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top;

		$('body,html').animate({scrollTop: des},800);
		return false;
	});

	function scrollDoctor(){
		if ( $('.b-doctor-scroll').length ){
			if ( $(window).width() > 768 ) {
				var vg = $('.b-doctor-scroll').offset().top - 30;
				var ng = vg + $('.b-doctor-scroll').outerHeight() - $('.b-doctor-scroll').find('.image').outerHeight();
				var st = $(window).scrollTop();
				$('.b-doctor-scroll').css('min-height',$('.b-doctor-scroll').find('.image').outerHeight());

				if ( st > vg ) {
					if ( st > ng ) {
						$('.b-doctor-scroll').find('.image').removeClass('scroll');
						$('.b-doctor-scroll').find('.image').addClass('bottom');
					} else {
						$('.b-doctor-scroll').find('.image').addClass('scroll');
						$('.b-doctor-scroll').find('.image').removeClass('bottom');
					}
				} else {
					$('.b-doctor-scroll').find('.image').removeClass('scroll');
					$('.b-doctor-scroll').find('.image').removeClass('bottom');
				}
			} else {
				$('.b-doctor-scroll').find('.image').removeClass('scroll');
				$('.b-doctor-scroll').find('.image').removeClass('bottom');
				$('.b-doctor-scroll').removeAttr('style');
			}
		}
	}
	scrollDoctor();

	function scrollBanner(){
		if ( $('.scroll-wrap-banner').length ){
			if ( $(window).width() > 768 ) {
				var vg = $('.scroll-wrap').offset().top - 30;
				var ng = vg + $('.scroll-wrap').outerHeight() - $('.scroll-wrap-banner').outerHeight();
				var st = $(window).scrollTop();
				$('.scroll-wrap').css('min-height',$('.scroll-wrap-banner').outerHeight());

				if ( st > vg ) {
					if ( st > ng ) {
						$('.scroll-wrap-banner').removeClass('scroll');
						$('.scroll-wrap-banner').addClass('bottom');
					} else {
						$('.scroll-wrap-banner').addClass('scroll');
						$('.scroll-wrap-banner').removeClass('bottom');
					}
				} else {
					$('.scroll-wrap-banner').removeClass('scroll');
					$('.scroll-wrap-banner').removeClass('bottom');
				}
			} else {
				$('.scroll-wrap-banner').removeClass('scroll');
				$('.scroll-wrap-banner').removeClass('bottom');
				$('.scroll-wrap').removeAttr('style');
			}
		}
	}
	scrollBanner();

	$(window).on('scroll',function(){
		scrollBanner();
		scrollDoctor();
	});

	$(window).resize(function(){

		$('.footer-nav').find('.item.active').each(function(){
			var eh = $(this).find('.item-wrap').innerHeight() + 10;

			if ( $(window).width() > 768 ){
				$(this).find('.item-content').removeAttr('style');
			} else {
				$(this).find('.item-content').css('height',eh);
			}
		});

		if ($('.b-qwestions').length){
			$('.b-qwestions').find('li.active').each(function(){
				var eh = $(this).find('.answer .text').outerHeight();
				$(this).find('.answer').css('height',eh);
			});
		}

		scrollBanner();
		scrollDoctor();

	});

});