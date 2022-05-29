// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
jQuery('header .burger').click(function() {
    if(jQuery(this).parents('header').find('.main-nav').is(':visible')) {
        jQuery(this).removeClass('open');
        jQuery(this).parents('header').find('.main-nav').removeClass('open-nav');
    } else {
        jQuery(this).addClass('open');
        jQuery(this).parents('header').find('.main-nav').addClass('open-nav');
    }
    jQuery('body').toggleClass('menu-open');
});

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 150) {
        jQuery('header').addClass('scroll');
    }
    else {
        jQuery('header').removeClass('scroll');
    }
});

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 150) {
        jQuery('header.scroll-header').addClass('visible');
    }
    else {
        jQuery('header.scroll-header').removeClass('visible');
    }
});

/* Smooth Scroll */
var width = jQuery(window).width();
jQuery(function() {
    jQuery('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          jQuery('html, body').animate({
            scrollTop: target.offset().top - 70
          }, 1000);
          return false;
        }
      }
    });
});


// Product Info slider
var post_count = jQuery('.brand-slider').find('.brand-slider-single').length;
if (post_count >= 5) {
  jQuery(".brand-slider").slick({
    dots: false,
    //infinite: true,
    speed: 5000,
    slidesToShow:5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //variableWidth: true,
        },
      },
    ],
  });
}


// Product Info slider
var p_count = jQuery('.gallery-slider').find('.gallery-slider-single').length;
if (p_count >= 1) {
  jQuery(".gallery-slider").slick({
    dots: true,
    //infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: 'linear',
    autoplaySpeed: 0,
  });
}

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

jQuery('h1 p,h2 p, h3 p').contents().unwrap();

jQuery('.product-details-holder-left-single').on('click', function (event) {
  var $pic = jQuery(this).find('img');
  jQuery('.product-details-holder-right-single img').attr('src', $pic.attr('src'));
});


// newsletter popup

jQuery('.newsletter-click').on('click', function (event) {
  event.preventDefault();
  jQuery('.newsletter-popup').fadeIn();
});

jQuery('.newsletter-close').on('click', function (event) {
  jQuery('.newsletter-popup, .newsletter-outer').fadeOut();
});


jQuery('.button-angebot').on('click', function (event) {
  event.preventDefault();
  jQuery('.angebot-popup').fadeIn().css('display', 'flex');
});

jQuery(document).mouseup(function (e) {
  if (jQuery(e.target).closest(".angebot-popup .image-block").length
              === 0) {
      jQuery(".angebot-popup").hide();
  }
});


// audio

jQuery('.audio').on('click', function (event) {
  jQuery(this).find('i').toggleClass('bi-volume-up bi-x');

  var playid = jQuery(this).siblings('audio').attr('id');
  var playIt = document.getElementById(playid);
  if (playIt.paused) {
    playIt.play();
  }
  else {
    playIt.pause();
  }
});