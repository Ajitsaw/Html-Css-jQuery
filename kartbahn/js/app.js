// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
jQuery('header .burger').click(function () {
    jQuery(this).toggleClass('open');
    jQuery(this).parents('body').find('.side-menu').toggleClass('open-menu');
    jQuery('body').toggleClass('menu-open');
    jQuery('header').toggleClass('open-menu');
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


// counter
jQuery('.counter').countUp();


// Submenu 

jQuery('.kartbahn').hover(function () {
    jQuery('.slideheader_media, .slideheader_karts').removeClass('open-Slidenav');
    jQuery('.slideheader_kartbahn').addClass('open-Slidenav');
})
jQuery('.karts').hover(function () {
    jQuery('.slideheader_kartbahn,.slideheader_media').removeClass('open-Slidenav');
    jQuery('.slideheader_karts').addClass('open-Slidenav');
})
jQuery('.media').hover(function () {
    jQuery('.slideheader_kartbahn, .slideheader_karts').removeClass('open-Slidenav');
    jQuery('.slideheader_media').addClass('open-Slidenav');
})
jQuery('main').hover(function () {
    jQuery('.slideheader_kartbahn,.slideheader_media, .slideheader_karts').removeClass('open-Slidenav');
})