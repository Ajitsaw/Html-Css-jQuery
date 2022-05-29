jQuery(document).ready(function () {
  // Menu Toggle
  jQuery(this).on("click", ".o-ham", function (e) {
    e.preventDefault();
    jQuery(".side-menu, body").toggleClass("open-menu");
    jQuery(this).toggleClass("open-menu");
    jQuery('header').toggleClass('open-menu');
  });

  // Popup opens
  setTimeout(function(){
    jQuery('.pop-fixed').addClass('popup-opens')
  }, 2000);
  // Popup closes
  jQuery('.pop-close').on('click', function(e){
    e.preventDefault();
    jQuery('.pop-fixed').removeClass('popup-opens');
    setTimeout(function(){
      jQuery('.pop-toggle').show();
    }, 1000);
  });
  jQuery('.pop-toggle').on('click', function(e){
    e.preventDefault();
    jQuery('.pop-fixed').addClass('popup-opens');
    jQuery(this).hide();
  });

  // fancybox
  $(".fancybox").fancybox();
  

  // Exhibition Slider Condition
  var post_count = jQuery('.exhibition-block').find('.exhibition-slider-single').length;
  if (post_count >= 2) {
    // Exhibition slider
    jQuery(".exhibition-block").slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow:2,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="" type="button"><img src="images/slide-arrow-left.png" alt=""></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="" type="button"><img src="images/slide-arrow-right.png" alt=""></button>',
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
  }
  

  // Portrait Slider Condition
  var post_count = jQuery('.portrait-slider').find('.portrait-slider-single').length;
  if (post_count >= 3) {
    // Portrait slider
    jQuery(".portrait-slider").slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow:3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="" type="button"><img src="images/left-arrow-white.png" alt=""></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="" type="button"><img src="images/right-arrow-white.png" alt=""></button>',
      responsive: [
        {
          breakpoint: 991,
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
            variableWidth: false,
          },
        },
      ],
    });
  }

  // Artist slider
  jQuery(".artist-slider").slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="" type="button"><img src="images/slide-arrow-left.png" alt=""></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="" type="button"><img src="images/slide-arrow-right.png" alt=""></button>',
  });
  
  // Exhibition page slider
  jQuery(".center-padding-slide").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    centerMode: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="" type="button"><img src="images/slide-arrow-left.png" alt=""> letzte Ausstellung</button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="" type="button">nächste Ausstellung <img src="images/slide-arrow-right.png" alt=""></button>',
  });

  // werke page slider
  jQuery(".center-werke-slide").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    centerMode: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="" type="button"><img src="images/slide-arrow-left.png" alt=""> zurück</button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="" type="button">nächste <img src="images/slide-arrow-right.png" alt=""></button>',
  });

  // News Slider Condition
  var news_count = jQuery('.news-slide').find('.news-slide-content').length;
  if (news_count > 3) {
    // News slider
    jQuery(".news-slide").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="" type="button"><img src="images/slide-arrow-left.png" alt=""> zurück</button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="" type="button">nächste <img src="images/slide-arrow-right.png" alt=""></button>',
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
   }
   // Submit button value remove 
  $('.submit-form input').attr('value', '');

});


// Fixed Header on scroll
jQuery(window).scroll(function() {    
  var scroll = jQuery(window).scrollTop();

  if (scroll >= 50) {
      jQuery(".o-header").addClass("scrolled");
  } else {
      jQuery(".o-header").removeClass("scrolled");
  }
  // position popup function 
  if(scroll + jQuery(window).height() > jQuery(document).height() - jQuery('footer').height() - 50) {
    jQuery('.pop-fixed').addClass('pop-all-close');

  }
  else {
    jQuery('.pop-fixed').removeClass('pop-all-close');
  }
});





