jQuery(document).ready(function () {
  // Menu Toggle
  jQuery(this).on("click", ".o-ham", function (e) {
    e.preventDefault();
    jQuery(".side-menu, body").toggleClass("open-menu");
    jQuery(this).toggleClass("open-menu");
    jQuery('header').toggleClass('open-menu');
  });


  // blog-slider
  var post_count = jQuery('.service-slider-main').find('.service-slider-single').length;
  if (post_count <= 3) {
    jQuery('.service-slider-main').addClass('slide-none');
  }else {
    jQuery('.service-slider-main').addClass('slider-ser');
    jQuery('.service-slider-main').removeClass('slide-none');
  }
  // News slider
  jQuery(".slider-ser").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  // Single Service slider
  jQuery(".service-info-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
  });

  // News slider
  jQuery(".logo-slide").slick({
    dots: false,
    //infinite: true,
    cssEase: 'linear',
    speed: 5000,
    slidesToShow:4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  // slider arrow change
  jQuery('.slick-prev').html('<img src="images/slide-arrow-left.png" alt="">');
  jQuery('.slick-next').html('<img src="images/slide-arrow-right.png" alt="">');

  //smooth scroll to next section
  var width = jQuery(window).width();
  jQuery(".o-banner-scroll").click(function () {
    if( width >= 1400) {
    jQuery("html, body").animate(
      {
        scrollTop: jQuery("#scrollTo").offset().top - 100,
      },
      1000
    );
    }else if ( width >= 768 && width <= 1399 ) {
      jQuery("html, body").animate(
        {
          scrollTop: jQuery("#scrollTo").offset().top - 75,
        },
        1000
      );
      }else {
      jQuery("html, body").animate(
        {
          scrollTop: jQuery("#scrollTo").offset().top - 60,
        },
        1000
      );
    }
  });

});

// Fixed Header on scroll
jQuery(window).scroll(function() {    
  var scroll = jQuery(window).scrollTop();

  if (scroll >= 50) {
      jQuery(".o-header").addClass("scrolled");
  } else {
      jQuery(".o-header").removeClass("scrolled");
  }

});





