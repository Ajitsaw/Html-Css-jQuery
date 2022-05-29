/* Equalizer */

$.fn.extend({
  equalizer: function() {
      var minHeight = 0;
      $(this).each(function() {
          if($(this).outerHeight() > minHeight) {
              minHeight = $(this).outerHeight();
          }
      });
      $(this).css('min-height', minHeight + 'px');
  }
});

$('.benefit__slider_slide').equalizer();

$('.center-slide--hardware .single').equalizer();
$('.center-slide--hardware .single .img').equalizer();
$('.center-slide--hardware .single .text').equalizer();
$('.center-slide--hardware .single .text .h3').equalizer();
$('.center-slide--hardware .single ul').equalizer();


$('.center-slide--one .single').equalizer();
$('.center-slide--one .single .img').equalizer();
$('.center-slide--one .single .text').equalizer();

$('.tab-section .tab').equalizer();

$('.partners__slider-single').equalizer();


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

// Benefit Slider

var swiper = new Swiper(".benefit__slider .slider", {
  direction: "horizontal",
  speed: 2000,
  slidesPerView: 1,
  spaceBetween: 30,
  grid: {
    rows: 1,
  },
  navigation: {
      prevEl: ".benefit__slider_arrow_left",
      nextEl: ".benefit__slider_arrow_right",
  },
  breakpoints: {
      1479.99: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
      1120: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
      },
      991: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
      },
      767: {
          slidesPerView: 2,
          grid: {
            rows: 1,
          },
      }
      
    }
});


/* Accordion */

$('.acc-title').click(function() {
$(this).toggleClass('open');
$accordion_content = $(this).next('.acc-content');
$('.acc-content').not($accordion_content).slideUp();
$('.acc-content').not($accordion_content).prev('.acc-title').removeClass('open');
$accordion_content.stop(true, true).slideToggle(400);
});


/* -----------------------------
// Logo Slider
-------------------------------*/

new Swiper(".partners__slider", {
direction: "horizontal",
loop: true,
speed: 1000,
grabCursor: true,
slidesPerView: 3,
navigation: {
  nextEl: ".partners__right",
  prevEl: ".partners__left",
},
});

/* Testimonail (Slider) */

new Swiper('.testimonial-slider', {
direction: 'horizontal',
autoplay: {
  delay: 5000,
  disableOnInteraction: false,
},
speed: 500,
loop: true,
slidesPerView: 'auto',
pagination: {
    el: '.testimonial .bullets',
    bulletActiveClass: 'active',
    bulletClass: 'slide',
    modifierClass: '',
    clickable: true
}
});

/* Center (Slider) */

new Swiper('.center-slide__slider', {
direction: 'horizontal',
loop: true,
speed: 1000,
slidesPerView: 'auto',
centeredSlides: true,
pagination: {
    el: '.center-slide .bullets',
    bulletActiveClass: 'active',
    bulletClass: 'slide',
    modifierClass: '',
    clickable: true
}
});

/* Video Overlay */

$('[data-overlay-trigger]').click(function() {
var id = $(this).data('overlay-trigger');
$('[data-overlay="'+id+'"]').css('display', 'flex').hide().fadeIn(500);
});

$('.video-overlay').click(function() {
$(this).fadeOut(500);
});
$('.video-overlay__video').click(function(e) {
e.stopPropagation();
});



// Tab Section

$('.tab-section .tab').hide();

$('.tab-section .tabs li:first-child').addClass('active');
$('.tab-section .tab:first-child').addClass('active');

$('.tab-section .tabs li').click(function() {
var index = $(this).index();

$('.tab-section .tabs li').removeClass('active');
$(this).addClass('active');

$('.tab-section .tab').removeClass('active');
$('.tab-section .tab').eq(index).addClass('active');
});


// Button CLick more text will appear


$('.more').click(function(e) {
e.preventDefault();
$('.hidden').slideToggle();
$(this).toggleClass('less');
});



/// Back to Top

var btn = $('.click-to-top');

$(window).scroll(function() {
if ($(window).scrollTop() > 500) {
  btn.addClass('show');
} else {
  btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});



/* Ajax Form */

$('.ajax-form').submit(function(e) {
e.preventDefault();

var form = $(this),
    url = $(this).attr("action"),
    data = $(this).serialize();

console.log(data);

$.ajax({
    type: "POST",
    url: url,
    data: data,
}).done(function(response) {
    if(response == 1) {
        form.find('.error').hide();
        form.find('.success').show();
    } else {
        form.find('.error').show();
        form.find('.success').hide();
    }
});
});