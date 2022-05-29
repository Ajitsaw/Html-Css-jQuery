/* Equalizer */

$.fn.extend({
    equalizer: function () {
        let minHeight = 0;
        $(this).each(function () {
            if ($(this).outerHeight() > minHeight) {
                minHeight = $(this).outerHeight();
            }
        });
        $(this).css('min-height', minHeight + 'px');
    }
});

$('.testimonail .single h3').equalizer();
$('.tab-holder .tab-single').equalizer();
$('.news__single h4.font-weight-bold').equalizer();
$('.services__slider__single .text').equalizer();

// Header height
let header = $('header').height();

/* Smooth Scroll */
jQuery(function () {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {

        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - header
                }, 1000);
                return false;
            }
        }
    });
});

// Scroll Header

jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() > 30) {
        jQuery("header").addClass("sticky-added");
    } else {
        jQuery("header").removeClass("sticky-added");
    }
});

$(".current-lang").click(function(){
	$(this).next("ul").toggle();
    $(this).toggleClass("current-lang-open");
});


//window Width

let width = $(window).width();


/* Overlay (Open / Close) */

var tl = gsap.timeline({ paused: true });

tl.add(gsap.to(".overlay", { y: "0", ease: Sine.easeInOut, duration: 0.5 }), 0);
tl.addLabel("main-nav", ">");
tl.add(
  gsap.to(".overlay .overlay__right", {
    y: "0",
    ease: Sine.easeInOut,
    duration: 0.5,
  }),
  "<+=0.1"
);
tl.addLabel("secondary-nav", ">");
tl.add(
  gsap.to(".overlay .overlay__right .bottom", {
    y: "0",
    ease: Sine.easeInOut,
    duration: 0.5,
  }),
  "<+=0.3"
);
tl.addLabel("slogan", ">");

tl.add(
  gsap.from(".overlay .main-nav > ul > li", {
    y: "30px",
    opacity: 0,
    ease: Sine.easeInOut,
    duration: 0.3,
    stagger: 0.1,
  }),
  "main-nav-=0.2"
);
tl.add(
  gsap.from(".overlay .main-nav .button", {
    y: "30px",
    opacity: 0,
    ease: Sine.easeInOut,
    duration: 0.3,
  }),
  ">-=0.3"
);

tl.add(
  gsap.to(".overlay .overlay__close", {
    opacity: 1,
    ease: Sine.easeInOut,
    duration: 0.3,
  }),
  "secondary-nav-=0.2"
);
tl.add(
  gsap.from(".overlay .top h2, .overlay .top h2 address", {
    y: "30px",
    opacity: 0,
    ease: Sine.easeInOut,
    duration: 0.3,
    stagger: 0.1,
  }),
  "secondary-nav-=0.2"
);

tl.add(
  gsap.from(".overlay .logo", {
    y: "30px",
    opacity: 0,
    ease: Sine.easeInOut,
    duration: 0.3,
  }),
  "slogan-=0.2"
);


$("header .nav-toggle, .overlay .overlay__close").click(function () {
  toggle_overlay();
});

function toggle_overlay() {
  $("header .nav-toggle").toggleClass("open");
  $(".overlay").toggleClass("open");
  $("body").toggleClass("menu-open");

  if ($(".overlay").hasClass("open")) {
    tl.play();
  } else {
    tl.reverse();
  }
}
// Swiper Sliders

let hero_text = new Swiper('.text-slide', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: '1',
    navigation: {
        prevEl: ".hero--slide__left",
        nextEl: ".hero--slide__right",
    },
    pagination: {
        el: '.hero .bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});


/* Sector (Slider) */

let sector_bg = new Swiper('.sector__slider__bg', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    slidesPerView: '1',
    effect: 'fade',
    navigation: {
        prevEl: ".sector--slide__left",
        nextEl: ".sector--slide__right",
    },
    pagination: {
        el: '.sector .bullet',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});


// Weitere Lösungen

let weitere = new Swiper('.weitere-losungen .slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: "auto",
    pagination: {
        el: '.weitere-losungen .bullet',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});

/* Team (Slider) */

let team_bg = new Swiper('.team__slider__bg', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: '1',
    effect: 'fade',
    navigation: {
        prevEl: ".team--slide__left",
        nextEl: ".team--slide__right",
    },
    pagination: {
        el: '.team .bullet',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    },
    breakpoints: {  
        '1119.99': {
          slidesPerView: "1",
          loop: false,
          effect: "",
        },
      },
});

/* -----------------------------
// CountUp
-------------------------------*/

var a = 0;
$(window).scroll(function () {
    if($('#counter').length) {
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
    
                    {
    
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
    
                    });
            });
            a = 1;
        }
    }
    
});


// Select 2
$('.custom-select').select2({
    minimumResultsForSearch: -1,
    width: '100%'
});


// Tabs
$('.tab-nav .item:first-child').addClass('active');
$('.tab-content .single:first-child').addClass('active');
$('.tab-nav .item').on('click', function(e){
    e.preventDefault();
    const index = $(this).index();
    //let video_src = $('.tab-content .single').eq(index).find('video').attr("src");
    //console.log(video_src);

    $('.tab-nav .item').not(this).removeClass('active');
    $(this).addClass('active');

    $('.tab-content .single').not(this).removeClass('active');
    $('.tab-content .single').eq(index).addClass('active');
    //$('.tab-content .single').find('video')[0].pause();
    //$('.tab-content .single.active').find('video')[0].play();
    
});


/* News Filter */

// $('.news-dropdown [data-filter]').change(function() {
//     var value = $(this).val();

//     $('.col-lg-4').each(function() {
//         if(value == '*' || $(this).data('cat') == value) {
//             $(this).show();
//         } else {
//             $(this).hide();
//         }
//     });
// });


var newsFilter = {cat: "", branche: "", themen: "", losung: ""};

$('.news-dropdown [data-filter]').change(function() {
    var filter = $(this).data('filter');
        value = $(this).val();

    if(value == "*") {
        newsFilter[filter] = "";
    } else {
        newsFilter[filter] = value;
    }

    $('[data-news]').each(function() {
        var match = true;

        if(newsFilter.cat != "" && $(this).data('cat') != newsFilter.cat) {
            match = false;
        }
        if(newsFilter.branche != "" && $(this).data('branche') != newsFilter.branche) {
            match = false;
        }
        if(newsFilter.themen != "" && $(this).data('themen') != newsFilter.themen) {
            match = false;
        }
        if(newsFilter.losung != "" && $(this).data('losung') != newsFilter.losung) {
            match = false;
        }

        if(match) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});


/// Lode More content

$(function () {
    size_li = $(".news--page .col-lg-4").length;
    if(size_li < 6) {
        $('.news--page .button-group').hide();
    }
    $(".news--page .col-lg-4").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".news--page .col-lg-4:hidden").slice(0, 3).slideDown();
        if ($(".news--page .col-lg-4:hidden").length == 0) {
            $(".news--page .button-group").fadeOut('slow');
        }
    });
  });


// Lang Menu
var value = $('.current-lang').attr('value');
$('#' + value).hide();

/* Ajax Form */

$('.ajax-form').submit(function (e) {
    e.preventDefault();

    let form = $(this),
        url = $(this).attr("action"),
        data = $(this).serialize();

    console.log(data);

    $.ajax({
        type: "POST",
        url: url,
        data: data,
    }).done(function (response) {
        console.log(response);
        if (response == 1) {
            form.find('.error').hide();
            form.find('.success').show();
        } else {
            form.find('.error').show();
            form.find('.success').hide();
        }
    });
});
