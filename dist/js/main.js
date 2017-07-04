		//cava parallax
		window.requestAnimationFrame = window.requestAnimationFrame
		|| window.mozRequestAnimationFrame
		|| window.webkitRequestAnimationFrame
		|| window.msRequestAnimationFrame
		|| function f() {
		   setTimeout(f, 1000/60)
		}

		var doc = document;
		var granola1 = doc.querySelector('.granola__1'),
			granola2 = doc.querySelector('.granola__2'),
			granola3 = doc.querySelector('.granola__3'),
			granola4 = doc.querySelector('.granola__4'),
			granola5 = doc.querySelector('.granola__5'),
			granola6 = doc.querySelector('.granola__6')

		function scroll__beans() {
			var scrolltop = window.pageYOffset
			granola1.style.top = -scrolltop * 0.2 + 'px';
			granola2.style.top = -scrolltop * 0.2 + 'px';
			granola3.style.top = -scrolltop * 0.2 + 'px';
			granola4.style.top = -scrolltop * 0.2 + 'px';
			granola5.style.top = -scrolltop * 0.2 + 'px';
			granola6.style.top = -scrolltop * 0.2 + 'px';

		}
		window.addEventListener('scroll', function () {
			requestAnimationFrame(scroll__beans)
		}, false)



		$(document).ready(function() {
            $('.top__slider').on('initialized.owl.carousel changed.owl.carousel', 
            	function(e) {
    				if (!e.namespace)  {
			      return;
			    }
			    var carousel = e.relatedTarget;
			    $('.slider__counter').text(carousel.relative(carousel.current()) + 1 + ' from ' + carousel.items().length);
			  }).owlCarousel({
			    items: 1,
			    loop:true,
			    margin: 53,
			    autoWidth: true,
			    center: true,
			    nav:true,
			    navText: false
			  });
            $('#partners').owlCarousel({
                loop:true, 
                nav: true,
                navText: false,
                autoplay:true, 
                smartSpeed:1000, 
                autoplayTimeout:6000, 
                dots: false,
                responsive:{ 
                    0:{
                        items:1
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:5
                    }
                }
            });
            $('#testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            nav: true,
		            navText: false,
		            autoplayTimeout: 4000,
		            smartSpeed: 800,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 1
		              },
		              1170: {
		                items: 1
		              }
		            }
		        });
        });
		scrollCheck();
		function scrollCheck() {
			var scroll = 0;
			$(window).scroll(function () {
				var position = $(this).scrollTop();
				if (position > scroll) {
					$('.nav__wrap').addClass('small');
				} else {
				   $('.nav__wrap').removeClass('small');
				}
			});
		}
		$('.navchik a[href^="#"]').click(function() {
		  var hash = $(this).attr('href');
		    $('html, body').animate({
		      scrollTop: $(hash).offset().top
		    }, 1000);
		    return false;
		});
		$(".scroll__btn").on("click", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 700);
		});