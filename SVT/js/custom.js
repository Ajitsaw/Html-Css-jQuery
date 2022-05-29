jQuery(document).ready(function () {
  // Menu Toggle
  jQuery(this).on("click", ".o-ham", function (e) {
    e.preventDefault();
    jQuery(".side-menu, body").toggleClass("open-menu");
    jQuery(this).toggleClass("open-menu");
    jQuery('header').toggleClass('open-menu');
  });

  // On click video Play
  jQuery(this).on("click", ".video-btn", function (e) {
    jQuery('.video-popup').css('display', 'flex');
    jQuery('.video-container video').get(0).play();
  });
  jQuery(this).on("click", ".video-cross", function (e) {
    jQuery('.video-popup').css('display', 'none');
    jQuery('.video-container video').get(0).pause();
  });

  // Submit Button Value ""
  jQuery('.submit-form input').attr('value', '');

  // counter
  jQuery('.counter').countUp();

  // Equipment click Js
  let equip = jQuery('.equipment-listings .equipment-listings-single');
  // Add Active class to first child
  jQuery('.equipment-listings .equipment-listings-single:first-child').addClass('active');
  // click function
  jQuery(document).on('click', '.equipment-listings-single', function(){
    equip.removeClass('active');
    jQuery(this).addClass('active');
  });

  // Download form open
  jQuery(document).on('click', '.download', function(e) {
    e.preventDefault();
    jQuery('.download-form').addClass('download-open');
  });
  // Download form close
  jQuery(document).on('click', '.download-cross', function() {
    jQuery('.download-form').removeClass('download-open');
  });

  // Home Banner Slider
  jQuery(".home-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  // Technical Details Slider
  jQuery(".slide-image").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
  });

  // Company Slider
  var post_count = jQuery('.management-slide-holder').find('.management-slider').length;
  console.log(post_count);
  if (post_count >= 3) {
    jQuery(".management-slide-holder").slick({
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
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }
  


  // Smooth scroll to next section
  var width = jQuery(window).width();
  jQuery(".o-banner-scroll").click(function () {
    if( width >= 1400) {
    jQuery("html, body").animate(
      {
        scrollTop: jQuery("#scrollTo").offset().top - 144,
      },
      1000
    );
    }else if ( width >= 768 && width <= 1399 ) {
      jQuery("html, body").animate(
        {
          scrollTop: jQuery("#scrollTo").offset().top - 85,
        },
        1000
      );
      }else {
      jQuery("html, body").animate(
        {
          scrollTop: jQuery("#scrollTo").offset().top - 70,
        },
        1000
      );
    }
  });

  // Pertner Logo Slider
  if( width < 767) {
    jQuery('.partner-logo-holder > .row').addClass('partner-logo-slider')
    // Slider
    jQuery(".partner-logo-slider").slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow:1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      
    });
  }


  // Hash Menu click scroll
  jQuery(".navigationMenu a").click(function(el) {
    el.preventDefault();
    let href = jQuery(this).attr('data-target');

    if( width >= 1400) {
      jQuery('html, body').animate({
          scrollTop: eval(jQuery('#' + href)).offset().top - 200
      }, 1000);
    }else {
      jQuery('html, body').animate({
        scrollTop: eval(jQuery('#' + href)).offset().top - 120
    }, 1000);
    }
  });

  // offset checking for Stats section
  if (jQuery('#stats').length) {
    var animationPosition = jQuery('#stats').offset().top;
  }
  
  if(jQuery('.pageNavigation').length) {
  var navigationTop = jQuery('.pageNavigation').offset().top;
  }
  var headerHeight = jQuery('header').height();
  // Fixed Header on scroll

  jQuery(window).scroll(function() {    
    
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 10) {
        jQuery(".o-header").addClass("scrolled");
    } else {
        jQuery(".o-header").removeClass("scrolled");
    }

    if( scroll > navigationTop - headerHeight) {
      jQuery('.pageNavigation').addClass('menu-scrolled');
    } else {
      jQuery('.pageNavigation').removeClass('menu-scrolled');
    }

    // Text Animation on scroll 
    if( scroll > animationPosition - 300) {
      jQuery('.animation-box h2').addClass('text-animate');
    }else {
      jQuery('.animation-box h2').removeClass('text-animate');
    }
  });

  // slider arrow change
  jQuery('.slick-prev').html('<img src="images/slide-arrow-left.png" alt="">');
  jQuery('.slick-next').html('<img src="images/slide-arrow-right.png" alt="">');

  // Company slider arrow change
  jQuery('.management-slide-holder .slick-prev').html('<img src="images/slide-arrow-small-l.png" alt="">');
  jQuery('.management-slide-holder .slick-next').html('<img src="images/slide-arrow-small-r.png" alt="">');


  //TOGGLING NESTED ul
  jQuery(".drop-down .selected a").click(function(e) {
    e.preventDefault();
    jQuery(".drop-down .options ul").toggle();
  });

  //SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
  jQuery(".drop-down .options ul li a").click(function(e) {
    e.preventDefault();
    var text = jQuery(this).html();
    jQuery(".drop-down .selected a span").html(text);
    jQuery(".drop-down .options ul").hide();
  });


  //HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
  jQuery(document).bind('click', function(e) {
    var jQueryclicked = jQuery(e.target);
    if (! jQueryclicked.parents().hasClass("drop-down"))
        jQuery(".drop-down .options ul").hide();
  });

  // News Details fixed bar
  let newsBar = jQuery('.width-deduction').innerWidth();
  // Dynamic width added
  jQuery('.news-right').css('max-width', newsBar)
  // height of the section 
  let newsBarHeight = jQuery('.news-single-content').height();
  let newsHeight = jQuery('.news-right').outerHeight();

  jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();

    if(scroll > newsBarHeight - newsHeight) {
      jQuery('.news-right').addClass('newsAbs')
    }else {
      jQuery('.news-right').removeClass('newsAbs')
    }

  }); 


  // Company Page Logo Tab
  jQuery('.connex-logo .logo-c:first-child').addClass('active');
  // Active class add onclick
  jQuery(document).on('click', '.connex-logo .logo-c', function(w){
    w.preventDefault();
    jQuery('.connex-logo .logo-c').removeClass('active');
    jQuery(this).addClass('active');
    
    // get the Id
    let id = jQuery(this).attr('data-target');

    // Show the content On click
    jQuery('.connex-logo-heading .connex-logo-content').slideUp();
    jQuery('#' + id).slideDown();
  });


  // Service tab Js
  jQuery('.service-tab-buttons a:first-child').addClass('active');
  jQuery('.service-tab-content .service_tab:first-child').addClass('active');
  // Anchor btn click function
  jQuery(document).on('click', '.service-tab-buttons a', function(j){
    j.preventDefault();
    jQuery('.service-tab-buttons a').removeClass('active');
    jQuery(this).addClass('active');
    
    // Get the index of click
    let index = jQuery(this).index();

    // Remove Class active
    jQuery('.service-tab-content .service_tab').removeClass('active');

    // Active add to tab content
    jQuery('.service-tab-content .service_tab').eq(index).addClass('active');

  });

  // Product Menu
  jQuery(document).on('click', '#product a', function(e) {
    e.preventDefault();
    jQuery('.product-menu').slideDown();

    // jQuery('.main-menu ul li').removeClass('current-menu-item');
    // jQuery(this).parents().addClass('current-menu-item');
  });
  jQuery(document).on('click', '.product-menu-close', function() {
    jQuery('.product-menu').slideUp();
  });

  const swup = new Swup({
    
  });

}); // document.ready








