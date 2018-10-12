(function ($) {
    "use strict";

    //custom_socila_menu
    $('.slider-social-icon ul li').first().addClass("social-link-active");

    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });


    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });


    // mainSlider
    function mainSlider() {
        var BasicSlider = $(".main-slider-activation");
        BasicSlider.on("init", function (e, slick) {
            var $firstAnimatingElements = $(".single-slider:first-child").find(
                "[data-animation]"
            );
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(
                '.single-slider[data-slick-index="' + nextSlide + '"]'
            ).find("[data-animation]");
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            infinite: true,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><span class='left-arrow-main-slider'>&larr;</span>prev</button>",
            nextArrow: "<button type='button' class='slick-next pull-right'>next<span class='right-arrow-main-slider'>&rarr;</span></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents =
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data("delay");
                var $animationType = "animated " + $this.data("animation");
                $this.css({
                    "animation-delay": $animationDelay,
                    "-webkit-animation-delay": $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    // isotop
    var $grid = $('.grid').imagesLoaded(function () {
        // init Isotope
        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    // isotop
    $('.box-portfolio').imagesLoaded(function () {
        // init Isotope
        $('.box-portfolio').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });

    // filter items on button click
    $('.portfolio-menu-box').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    // testimonilas-activation
    $('.testimonilas-activation').slick({
        dots: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><span class='left-arrow-main-slider'>←</span>prev</button>",
        nextArrow: "<button type='button' class='slick-next pull-right'>next<span class='right-arrow-main-slider'>→</span></button>",
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
			},
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
			},
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
    });

    // testimonilas-activation
    $('.testimonilas-activation_another').slick({
        dots: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><span class='left-arrow-main-slider'>←</span>prev</button>",
        nextArrow: "<button type='button' class='slick-next pull-right'>next<span class='right-arrow-main-slider'>→</span></button>",
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
			},
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
			},
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
    });


    // portfolio-details-activation
    $('.portfolio-details-activation').slick({
        dots: false,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><span class='left-arrow-main-slider'>←</span>prev</button>",
        nextArrow: "<button type='button' class='slick-next pull-right'>next<span class='right-arrow-main-slider'>→</span></button>",
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
			},
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
			},
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
    });


    /* brand-active */
    $('.brand-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

    /*==================================
    	Progressbar Setup
    	====================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 850) {
            $('#bar1').barfiller();
            $('#bar2').barfiller();
            $('#bar3').barfiller();
            $('#bar4').barfiller();
        }
    });

    // counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // WOW active
    new WOW().init();


})(jQuery);
