// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
$('header .burger').click(function() {
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
  if( width < 767) {
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
    }
    if( width > 768 && width < 1399) {
      jQuery('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            jQuery('html, body').animate({
              scrollTop: target.offset().top - 90
            }, 1000);
            return false;
          }
        }
      });
    }
    if( width > 1400 ) {
      jQuery('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            jQuery('html, body').animate({
              scrollTop: target.offset().top - 130
            }, 1000);
            return false;
          }
        }
      });
    }
});

/* Scroll Up */

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 600) {
        jQuery('.scroll-up').addClass('visible');
    }
    else {
        jQuery('.scroll-up').removeClass('visible');
    }
});

// Submit Button Value ""
jQuery('.submit-form input').attr('value', '');

/* Branchen Menu */
jQuery(document).on('click', '.branchen a, .branchen-button', function(e){
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.main-nav').removeClass('open-nav');
    jQuery('.unternehmen-menu, .mediathek-menu, .anfordern').slideUp(500);
    jQuery('.branchen-menu').slideDown(500);
    jQuery('body').addClass('overflow-hidden');
});
jQuery(document).on('click', '.cross-branchen', function(){
    jQuery('.branchen-menu, .unternehmen-menu, .mediathek-menu, .anfordern').slideUp(500);
    jQuery('body').removeClass('overflow-hidden');
});


/* Beratungsgespräch anfordern */
jQuery(document).on('click', '#anfordern', function(e){
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.main-nav').removeClass('open-nav');
    jQuery('.branchen-menu, .unternehmen-menu, .mediathek-menu').slideUp(500);
    jQuery('.anfordern').slideDown(500);
    jQuery('body').addClass('overflow-hidden');
    jQuery('body').toggleClass('menu-open');
});
jQuery(document).on('click', '.cross-anfordern', function(){
    jQuery('.anfordern').slideUp(500);
    jQuery('body').removeClass('overflow-hidden');
});

/* Unternehmen Menu */
jQuery(document).on('click', '.unternehmen a, .unternehmen-button', function(e){
  e.preventDefault();
  jQuery('header .burger').removeClass('open');
  jQuery('.main-nav').removeClass('open-nav');
  jQuery('.branchen-menu, .mediathek-menu, .anfordern').slideUp(500);
  jQuery('.unternehmen-menu').slideDown(500);
  jQuery('body').addClass('overflow-hidden');
  jQuery('body').toggleClass('menu-open');
});

/* Mediatak Menu */
jQuery(document).on('click', '.mediathek a, .mediathek-button', function(e){
  e.preventDefault();
  jQuery('header .burger').removeClass('open');
  jQuery('.main-nav').removeClass('open-nav');
  jQuery('.branchen-menu, .unternehmen-menu, .anfordern').slideUp(500);
  jQuery('.mediathek-menu').slideDown(500);
  jQuery('body').addClass('overflow-hidden');
  jQuery('body').toggleClass('menu-open');
});



// Product Info slider
var post_count = jQuery('.product-info-slide').find('.product-info-slider').length;
if (post_count >= 3) {
  jQuery(".product-info-slide").slick({
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
          slidesToShow: 3,
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
    ],
  });
}
// slider arrow change
jQuery('.product-info-slide .slick-prev').html('<i class="ti-arrow-left"></i>');
jQuery('.product-info-slide .slick-next ').html('<i class="ti-arrow-right"></i>');

// service page accordion 
var accordionHead = jQuery('.losungen-accordion-list-head');
jQuery(document).on('click', '.losungen-accordion-list-head', function(){
  if(jQuery(this).hasClass("active")) {
    accordionHead.removeClass('active');
    jQuery('.losungen-accordion-list-content').slideUp();
  }
  else {
    accordionHead.removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.losungen-accordion-list-content').slideUp();
    jQuery(this).siblings('.losungen-accordion-list-content').slideToggle();
  }
});


// Case studies section slider

$('.section-container').slick({
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  vertical: true,
  verticalSwiping: true
  });


// Refarenze slider 

jQuery('.referenzen-slide-thumb ul li:first-child').addClass('selected');
jQuery('.referenzen-slide-box .referenzen-single:first-child').addClass('active');
jQuery('.referenzen-slide-thumb ul li a').on('click', function(e){
  e.preventDefault();
  jQuery('.referenzen-slide-thumb ul li').removeClass('selected');
  jQuery(this).parent().addClass('selected');

  let index = jQuery(this).parent().index();

  jQuery('.referenzen-slide-box .referenzen-single').removeClass('active');
  jQuery('.referenzen-slide-box').find('.referenzen-single').eq(index).addClass('active');
});
