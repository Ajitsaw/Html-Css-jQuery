// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
jQuery('header .burger').click(function () {
    jQuery(this).toggleClass('open');
    jQuery(this).parents('body').find('.side-menu').toggleClass('open-menu');
    jQuery('body').toggleClass('menu-open');
    jQuery('header').toggleClass('open-menu');
});

if (jQuery('.scroll-nav').length) {
    var navigationTop = jQuery('.scroll-nav').offset().top;
}
if (jQuery('.scroll-anchor').length) {
    var scroll_anchor = jQuery('.scroll-anchor').offset().top;
}


/* Smooth Scroll */
jQuery(function () {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


// SideMenu Content

jQuery(document).on('click', '.sidemenu', function (e) {
    e.preventDefault();
    jQuery('.side-menu').addClass('side-open');
    jQuery('body').addClass('menu-open');
});
jQuery(document).on('click', '.side-menu-cross', function (e) {
    e.preventDefault();
    jQuery('.side-menu').removeClass('side-open');
    jQuery('body').removeClass('menu-open');
});


// accordion
var accordionHead = jQuery('.accordion-list-head');
jQuery(document).on('click', '.accordion-list-head', function () {
    if (jQuery(this).hasClass("active")) {
        accordionHead.removeClass('active');
        jQuery('.accordion-list-content').slideUp();
    } else {
        accordionHead.removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.accordion-list-content').slideUp();
        jQuery(this).siblings('.accordion-list-content').slideToggle();
    }
});



// sidemenu arrow open
jQuery(document).on('click', '.side-menu ul li span', function () {
    jQuery(this).siblings('ul').slideToggle(500);
    jQuery(this).toggleClass('rotate');
});


// counter
jQuery('.counter').countUp();

// Banner Slider

jQuery('.image-slide').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    
});

jQuery('.banner-home-slider__controls span').click(function() {
    var slide = jQuery(this).data("slide") - 1;
    jQuery('.image-slide').slick('slickGoTo', slide)
});

jQuery('.image-slide').on('afterChange', function() {
    var currentSlide = jQuery('.image-slide').slick('slickCurrentSlide') + 1;
    jQuery('.banner-home-slider__controls span').removeClass("active")
    jQuery('.banner-home-slider__controls span[data-slide="' + currentSlide + '"]').addClass("active");
});


// Product slider

var post_count = jQuery('.product-block-slider').find('.product-block-slider-single').length;
if (post_count >= 2) {
    jQuery('.product-block-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 2,
        arrows: true,
        dots: false,
        nextArrow: '.product-block-slider-control-right',
        prevArrow: '.product-block-slider-control-left',
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}

// Product slider

var uber_count = jQuery('.uber-image-slider').find('.uber-image-slider-single').length;
if (uber_count >= 3) {
    jQuery('.uber-image-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        nextArrow: '.uber-image-control-right',
        prevArrow: '.uber-image-control-left',
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}


jQuery(document).on('click','.kontaktformular', function(e){
    e.preventDefault();
    jQuery('.popup').fadeIn();
    jQuery('body').addClass('menu-open');
});

jQuery(document).on('click','.popup-cross', function(){
    jQuery('.popup').fadeOut();
    jQuery('body').removeClass('menu-open');
});


if(jQuery(window).width() > 767) {

function init() {
  
    var i = 0;
    var items = document.querySelectorAll(".element-item");
    var single = document.querySelectorAll(".download-block-single");
    var itemsHeight = [];
    
    //console.log(items);
    //console.log(itemsHeight);
    
    for (i = 0; i < items.length; i++) {
      
      itemsHeight.push(items[i].offsetHeight);
    }
    
    var maxHeight = Math.max(...itemsHeight);
    
    for (i = 0; i < items.length; i++) {
    
      //items[i].style.height = maxHeight + "px";
      single[i].style.height = maxHeight + "px";

    }
  }
  
  init();

}

// init Isotope
var $grid = jQuery('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = jQuery(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = jQuery(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

// bind filter on select change
jQuery('.filters-select').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});



// Text expand

jQuery('.open-button').on( 'click', function() {
    jQuery('.hidden-text').slideToggle(300);
    jQuery(this).toggleClass('rotate');
});