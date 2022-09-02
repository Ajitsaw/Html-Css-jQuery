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

$('.news-overview .news-overview__news .news .text .title').equalizer();
$('.news-overview .news-overview__news .news .text .desc').equalizer();
$('.home-links .home-links__box.margin .text').equalizer();
$('.product-overview .product .image').equalizer();
$('.product-service .product-service__tabs .tab').equalizer();
$('.product-service .container .col-lg-6').equalizer();
$('.benefit').equalizer();
$(".jobs-overview .jobs-overview__jobs .overview .job .info .type img").equalizer();

$('.career-benefits .career-benefits__overview .benefit .text').hide();
$('.overview .download .title').equalizer();

// Fancy box init
jQuery(".fancybox, .fancy").fancybox();


/* Smooth Scroll */
jQuery(function () {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {
        var height = $('header').outerHeight();
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - height
                }, 1000);
                return false;
            }
        }
    });
});


/* Overlay (Open / Close) */

var tl = gsap.timeline({paused: true});

tl.add(gsap.to(".overlay", {y: "0", ease: Sine.easeInOut, duration: 0.5}), 0);
tl.addLabel("main-nav", ">");
tl.add(gsap.to(".overlay .overlay__right", {y: "0", ease: Sine.easeInOut, duration: 0.5}), "<+=0.1");
tl.addLabel("secondary-nav", ">");
tl.add(gsap.to(".overlay .overlay__right .bottom", {y: "0", ease: Sine.easeInOut, duration: 0.5}), "<+=0.3");
tl.addLabel("slogan", ">");

tl.add(gsap.from(".overlay .main-nav > ul > li", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3, stagger: 0.1}), "main-nav-=0.2");
tl.add(gsap.from(".overlay .main-nav .button", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3}), ">-=0.3");

tl.add(gsap.to(".overlay .overlay__close", {opacity: 1, ease: Sine.easeInOut, duration: 0.3}), "secondary-nav-=0.2");
tl.add(gsap.from(".overlay .secondary-nav ul li", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3, stagger: 0.1}), "secondary-nav-=0.2");

tl.add(gsap.from(".overlay .overlay .overlay__right .top .companies", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3}));

$('header .nav-toggle, .overlay .overlay__close').click(function() {
    toggle_overlay();
});

function toggle_overlay() {
    $('header .nav-toggle').toggleClass('open');
    $('.overlay').toggleClass('open');
    
    if($('.overlay').hasClass("open")) {
        tl.play();
    } else {
        tl.reverse();
    }
    $('body').toggleClass('open');
}

/* Overlay (Sub menu) */

$('.overlay .main-nav ul li.menu-item-has-children > a').click(function(e) {
    e.preventDefault();
    
    var submenu = $(this).next('.sub-menu');

    $('.overlay .main-nav ul li .sub-menu').not(submenu).slideUp(500);
    $(this).next('.sub-menu').slideToggle(500);
});

/* Contact Overlay */

$('.contact-overlay .contact-overlay__toggle').click(function() {
    $('.contact-overlay .contact-overlay__content').toggle();
});

/* Custom Select */

$('.custom-select').select2({
    width: '100%'
});

/* Video Overlay */

$('[data-overlay-trigger]').click(function() {
    var id = $(this).data('overlay-trigger');
    $('[data-overlay="'+id+'"]').css('display', 'flex').hide().fadeIn(500);
});

$('.video-overlay .video-overlay__close').click(function() {
    $(this).parent().fadeOut(500);
    var iframe = $(this).parent().find('.video-overlay__video').find('iframe')
    iframe.attr("src", iframe.attr("src"));
});

/* Home Customers (Slider) */

new Swiper('.customers__slider:not(.reversed)', {
    direction: 'horizontal',
    loop: true,
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    grabCursor: false,
    slidesPerView: 'auto',
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    }
});

new Swiper('.customers__slider.reversed', {
    direction: 'horizontal',
    loop: true,
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    grabCursor: false,
    slidesPerView: 'auto',
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
    }
});

/* Home Solutions (Slider) */

new Swiper('.home-solutions__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});

/* Home Products (Slider) */

new Swiper('.home-products__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});

/* CountUp */

// $('.countup span').counterUp({
//     delay: 100,
//     time: 2000
// });


if($('#counter').length == 1) {
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.countup span').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});

}

/* Career Slider */

new Swiper('.career-slider__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});

/* Career Chances (Slider) */

new Swiper('.career-chances__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});

/* Testimonials (Slider) */

new Swiper('.testimonials__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});

/* Jobs */

$('.jobs-overview .jobs-overview__jobs .select-view button').click(function() {
    var view = $(this).data('view');

    $('.jobs-overview .jobs-overview__jobs .select-view button').removeClass('active');
    $(this).addClass('active');

    $('.jobs-overview .jobs-overview__jobs .overview').hide();
    $('.jobs-overview .jobs-overview__jobs .overview[data-view="'+view+'"]').show();

    $('.jobs-overview .jobs-overview__jobs .overview .job .info .title').equalizer();
});

$('.jobs-overview .jobs-overview__jobs .overview .job .info .title').equalizer();

/* File Select (Job) */

$('.job-content .job-content__application form .form-group .file input').change(function() {
    var value = $(this).val();
    console.log(value);
    if(value) {
        $(this).parent().addClass('valid');
    } else {
        $(this).parent().removeClass('valid');
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

/* Sector Video (Play / Pause) */

$('.sector-video__video').click(function() {
    $(this).find('.trigger').hide();
    $(this).find('video').attr("controls", true);
    $(this).find('video').play();
});

/* Career Filter */

var careerFilter = {type: "", department: "", location: ""};

$('.jobs-overview [data-filter]').change(function() {
    var filter = $(this).data('filter'),
        value = $(this).val(),
        jobs = 0;

    if(value == "*") {
        careerFilter[filter] = "";
    } else {
        careerFilter[filter] = value;
    }

    $('[data-job]').each(function() {
        var match = true;

        if(careerFilter.type != "" && $(this).data('type') != careerFilter.type) {
            match = false;
        }
        if(careerFilter.department != "" && $(this).data('department') != careerFilter.department) {
            match = false;
        }
        if(careerFilter.location != "" && $(this).data('location') != careerFilter.location) {
            match = false;
        }

        if(match) {
            $(this).fadeIn();
            jobs++;
        } else {
            $(this).fadeOut();
        }
    });

    $('.jobs-overview .jobs-overview__status span').text(jobs / 2);
});

$('[data-reset]').click(function(e) {
    e.preventDefault();
    $('[data-filter]').val('*');
    $('[data-filter]').trigger('change');
});

/* News Filter */

$('.news-overview [data-filter]').change(function() {
    var value = $(this).val();

    $('[data-news]').each(function() {
        if(value == '*' || $(this).data('cat') == value) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

/* Contact Filter */

$('.contact-persons [data-filter]').change(function() {
    var value = $(this).val();

    $('[data-department]').each(function() {
        if(value == '*' || $(this).data('department') == value) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

/* Toggle callback */

$('[toggle-callback]').click(function() {
    var email = $(this).data('email');

    $('.callback-overlay').fadeIn(500);
    $('#person-email').val(email);
});

$('.callback-overlay .callback-overlay__content .close').click(function() {
    $('.callback-overlay').fadeOut(500);
});

/* Location Search */

$('[data-location-country]').change(function() {
    var value = $(this).val();
    if(value == "germany") {
        $('.select-country').show();
        $('[data-location-search]').attr('disabled', true);
    } else {
        $('.select-country').hide();
        $('[data-location-search]').attr('disabled', false);
    }
});

$('[data-location-city]').change(function() {
    $('[data-location-search]').attr('disabled', false);
});

$('[data-location-search]').click(function() {
    var value1 = $('[data-location-country]').val();
    console.log(value1);
    if(value1 == "germany") {
        var value2 = $('[data-location-city]').val();
        $('.location-overlay[data-location="' + value2 + '"]').fadeIn(500);
        $('body').addClass('open');
    } else {
        $('.location-overlay[data-location="' + value1 + '"]').fadeIn(500);
        $('body').addClass('open');
    }
});

$('.location-overlay .location-overlay__close').click(function() {
    $(this).parent().fadeOut(500);
    $('body').removeClass('open');
});

/* About History (Slider) */

const history = new Swiper('.about-history__slider', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
});

$('.about-history .about-history__slider .controls .prev').click(function() {
    history.slidePrev();
});

$('.about-history .about-history__slider .controls .next').click(function() {
    history.slideNext();
});

/* Product Overview */

$('.product-overview .product').equalizer();

var productFilter = {area: "", procedure: "", form: "", direction: ""};

$('.product-overview [data-filter]').change(function() {
    var filter = $(this).data('filter'),
    value = $(this).val();

    if(value == "*") {
        productFilter[filter] = "";
    } else {
        productFilter[filter] = value;
    }

    $('[data-product]').each(function() {
        var area = $(this).data('area').split(','),
            procedure = $(this).data('procedure').split(','),
            form = $(this).data('form').split(','),
            direction = $(this).data('direction').split(','),
            match = true;

        if(productFilter.area != "" && !area.includes(productFilter.area)) {
            match = false;
        }
        if(productFilter.procedure != "" && !procedure.includes(productFilter.procedure)) {
            match = false;
        }
        if(productFilter.form != "" && !form.includes(productFilter.form)) {
            match = false;
        }
        if(productFilter.direction != "" && !direction.includes(productFilter.direction)) {
            match = false;
        }

        if(match) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

/* Service Tabs */

$('.product-service .product-service__nav .tabs li').click(function() {
    var index = $(this).index();

    $('.product-service .product-service__nav .tabs li').removeClass('active');
    $(this).addClass('active');

    $('.product-service .product-service__tabs .tab').removeClass('active');
    $('.product-service .product-service__tabs .tab').eq(index).addClass('active');
});

/* Product Data */

var dataOpen = false;

$('.product-data .data .actions .toggle').click(function() {
    var tableHeight = $('.product-data .data .table table').height();

    $(this).toggleClass('open');

    if(dataOpen) {
        $('.product-data .data .table').css('height', '');
        dataOpen = false;
    } else {
        $('.product-data .data .table').css('height', (tableHeight + 80) + 'px');
        dataOpen = true;
    }
});

/* Product Functions (Slider) */

new Swiper('.product-functions__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});

/* Lightbox */

lightbox.option({
    'albumLabel': "Bild %1 von %2"
});

/* Downloads Filter */

$('.downloads [data-filter]').change(function() {
    var value = $(this).val();

    $('[data-download]').each(function() {
        if(value == '*' || $(this).data('type') == value) {
            $(this).fadeIn();
        } else {
            $(this).fadeOut();
        }
    });
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

/* Career Form */

$('.career-form').submit(function(e) {
    e.preventDefault();

    var form = $(this),
        url = $(this).attr("action");

    var data = new FormData($(this)[0]);

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        cache: false,
        contentType: false,
        processData: false
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

/// Back to Top

var btn = $('.click-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Submenu active js

jQuery(function($) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('.sub-menu li a').each(function() {
     if (this.href === path) {
      $(this).parent().addClass('active');
     }
    });
});


// news show more

// News Block Count
$(".news-overview__news .row .col-xl-3").hide();

size_li = $(".news-overview__news .row .col-xl-3").length;
console.log(size_li);
if(size_li < 10) {
    $('.news-button').hide();
}
x=10;
$('.news-overview__news .row .col-xl-3:lt('+x+')').show();

$('.news-button .button').click(function(e) {
    e.preventDefault();
    x= (x+4 <= size_li) ? x+4 : size_li;
    $('.news-overview__news .col-xl-3:lt('+x+')').slideDown();
    if(x == size_li || x <= 12) {
        $('.news-button').hide();
    }
});

// Adding target blank
$('.news-content__section').find('a').attr('target', '_blank');