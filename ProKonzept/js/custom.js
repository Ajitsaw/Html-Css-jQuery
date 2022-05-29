jQuery(document).ready(function () {
  // Menu Toggle
  jQuery(this).on("click", ".o-ham", function (e) {
    e.preventDefault();
    jQuery(".side-menu, body").toggleClass("open-menu");
    jQuery(this).toggleClass("open-menu");
  });
});

  // wow js
  jQuery(function () {
    new WOW().init();
  // Banner Slider
  jQuery(".main-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: '.side-slider',
    initialSlide:0, 
  });

  // Banner Slider Small
    var side = jQuery(".side-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: false,
    fade: true,
    focusOnSelect: false,
    autoplaySpeed: 5100,
    asNavFor: '.main-slider',
    initialSlide:1, 
  });
  jQuery('.main-slider').on('afterChange', function(){ 
    jQuery('.side-slider').slick('slickNext'); 
  });

  jQuery('.side-slider-single').on('click', function(){
    jQuery('.main-slider').slick('slickNext');
  });


  // News slider
  jQuery(".news-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 500,
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

  // Team Slider
  jQuery(".about-slide").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  
  // slider arrow html change
  jQuery('.slick-next').html('<img src="images/right-arrow.png" alt="">');
  jQuery('.slick-prev').html('<img src="images/left-arrow.png" alt="">');

  //smooth scroll to next section
  jQuery(".mousey").click(function () {
    jQuery("html, body").animate(
      {
        scrollTop: jQuery("#scrollTo").offset().top - 70,
      },
      1000
    );
  });

  
  // service page accordion 
  var accordionHead = jQuery('.service-accordion-list-head');
  jQuery(document).on('click', '.service-accordion-list-head', function(){
    if(jQuery(this).hasClass("active")) {
      accordionHead.removeClass('active');
      jQuery('.service-accordion-list-content').slideUp();
    }
    else {
      accordionHead.removeClass('active');
      jQuery(this).addClass('active');
      jQuery('.service-accordion-list-content').slideUp();
      jQuery(this).siblings('.service-accordion-list-content').slideToggle();
    }
  });


  jQuery('.slider-for').slick({ 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    arrows: false, 
    fade: true, 
    asNavFor: '.slider-nav',
    initialSlide:0, 
  }); 
    jQuery('.slider-nav').slick({ 
      slidesToShow: 3, 
      slidesToScroll: 1, 
      asNavFor: '.slider-for', 
      dots: true, 
      centerMode: true, 
      focusOnSelect: true ,
      initialSlide:1, 
    });

});

jQuery(window).scroll(function() {    
  var scroll = jQuery(window).scrollTop();

  if (scroll >= 10) {
      jQuery(".o-header").addClass("scrolled");
  } else {
      jQuery(".o-header").removeClass("scrolled");
  }

  // position info buttons function 
  if(scroll + jQuery(window).height() > jQuery(document).height() - 100) {
    jQuery('.f-socials').addClass('bottom-position')
  }
  else {
    jQuery('.f-socials').removeClass('bottom-position')
  }
});






