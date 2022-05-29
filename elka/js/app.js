// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
jQuery('header .burger').click(function () {
    jQuery(this).toggleClass('open');
    jQuery(this).parents('body').find('.side-menu').toggleClass('open-menu');
    jQuery('body').toggleClass('menu-open');
});

if (jQuery('.scroll-nav').length) {
    var navigationTop = jQuery('.scroll-nav').offset().top;
}
if (jQuery('.scroll-anchor').length) {
    var scroll_anchor = jQuery('.scroll-anchor').offset().top;
}


jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() > 150) {
        jQuery('header').addClass('scroll');
    } else {
        jQuery('header').removeClass('scroll');
    }

    if (jQuery(document).scrollTop() > 600) {
        jQuery('.scroll-up').addClass('visible');
    } else {
        jQuery('.scroll-up').removeClass('visible');
    }

    var scroll = jQuery(window).scrollTop();

    if (scroll > navigationTop + 130) {
        jQuery('.scroll-nav').addClass('menu-scrolled');
    } else {
        jQuery('.scroll-nav').removeClass('menu-scrolled');
    }
    if (scroll > scroll_anchor - 140) {
        jQuery('.scroll-anchor').addClass('menu-scrolled');
    } else {
        jQuery('.scroll-anchor').removeClass('menu-scrolled');
    }
});




/* Smooth Scroll */
var width = jQuery(window).width();
jQuery(function () {
    if (width < 767) {
        jQuery('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    return false;
                }
            }
        });
    }
    if (width > 768 && width < 1199) {
        jQuery('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 75
                    }, 1000);
                    return false;
                }
            }
        });
    }
    if (width > 1200 && width < 1600) {
        jQuery('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 84
                    }, 1000);
                    return false;
                }
            }
        });
    }
    if (width > 1400) {
        jQuery('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                    return false;
                }
            }
        });
    }
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


// onclick show div

size_li = jQuery(".listing .col-lg-4").length;
console.log(size_li);
x=3;
jQuery('.listing .col-lg-4:lt('+x+')').show();
jQuery('#loadMore').click(function (e) {
    e.preventDefault();
    x= (x+5 <= size_li) ? x+3 : size_li;
    jQuery('.listing .col-lg-4:lt('+x+')').slideDown();
    if(x == size_li){
        jQuery('.testimonial-button').hide();
    }
});
    

// form popup

// first screen open
jQuery(document).on('click', '.anfrage', function(e) {
    e.preventDefault();
    jQuery('.anfrage-popup').fadeIn();
    jQuery('.side-menu').removeClass('open-menu');
    jQuery('body').addClass('menu-open');
});

jQuery(document).on('click', '.english', function(e) {
    e.preventDefault();
    jQuery('#one').fadeOut();
    jQuery('#two').fadeIn();
});
jQuery(document).on('click', '.go-three', function(e) {
    e.preventDefault();
    jQuery('#two').fadeOut();
    jQuery('#three').fadeIn();
});
jQuery(document).on('click', '.go-four', function(e) {
    e.preventDefault();
    jQuery('#three').fadeOut();
    jQuery('#four').fadeIn();
});
jQuery(document).on('click', '.go-five', function(e) {
    e.preventDefault();
    jQuery('#four').fadeOut();
    jQuery('#five').fadeIn();
});
// close popup
jQuery(document).on('click', '.close-anfrage', function(e) {
    e.preventDefault();
    jQuery('.anfrage-popup').fadeOut();
    jQuery('body').removeClass('menu-open');
    jQuery('.anfrage-popup-one, .anfrage-popup-form').fadeOut();
    jQuery('.burger').removeClass('open');
});

jQuery(document).on('click', '.back-one', function(e) {
    e.preventDefault();
    jQuery('#two').fadeOut();
    jQuery('#five').fadeOut();
    jQuery('#one').fadeIn();
});
jQuery(document).on('click', '.back-two', function(e) {
    e.preventDefault();
    jQuery('#three').fadeOut();
    jQuery('#five').fadeOut();
    jQuery('#two').fadeIn();
});
jQuery(document).on('click', '.back-three', function(e) {
    e.preventDefault();
    jQuery('#four').fadeOut();
    jQuery('#five').fadeOut();
    jQuery('#three').fadeIn();
});
jQuery(document).on('click', '.back-four', function(e) {
    e.preventDefault();
    jQuery('#five').fadeOut();
    jQuery('#four').fadeIn();
});
