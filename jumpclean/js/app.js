jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 150) {
        jQuery('header').addClass('scroll');
    } else {
        jQuery('header').removeClass('scroll');
    }
});

/* Smooth Scroll */
var width = jQuery(window).width();
jQuery(function() {
    jQuery('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - 110
                }, 1000);
                return false;
            }
        }
    });
});

/* Scroll Up */
if (jQuery('.pageNavigation').length) {
    var navigationTop = jQuery('.pageNavigation').offset().top;
}

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 600) {
        jQuery('.scroll-up').addClass('visible');
    } else {
        jQuery('.scroll-up').removeClass('visible');
    }

    var scroll = jQuery(window).scrollTop();


    if (scroll > navigationTop - 60) {
        jQuery('.pageNavigation').addClass('menu-scrolled');
    } else {
        jQuery('.pageNavigation').removeClass('menu-scrolled');
    }

    // let menuid = jQuery('.navigationMenu ul li a');
    // jQuery('section').each(function(i) {
    //     if (jQuery(this).offset().top <= scroll) {
    //         let id = jQuery(this).attr('id');
    //         console.log('#' + id);
    //         if (menuid.attr('href') == '#' + id) {
    //             menuid.removeClass('active');
    //             menuid.attr('href', '#' + id).addClass('active')
    //         }
    //     }

    // });

});


// banner slider
var post_count = jQuery('.banner-slider').find('.banner-slider-single').length;
console.log(post_count);
if (post_count > 1) {
    jQuery('.banner-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });
}

jQuery('.banner-slider__controls span').click(function() {
    var slide = jQuery(this).data("slide") - 1;
    jQuery('.banner-slider').slick('slickGoTo', slide)
});

jQuery('.banner-slider').on('afterChange', function() {
    var currentSlide = jQuery('.banner-slider').slick('slickCurrentSlide') + 1;
    jQuery('.banner-slider__controls span').removeClass("active")
    jQuery('.banner-slider__controls span[data-slide="' + currentSlide + '"]').addClass("active");
});

var nav = new SlideNav({
    activeClass: "active",
    toggleBoxSelector: '.navigationMenu',
});

// form submit

jQuery("#contact-form").submit(function(e) {
    e.preventDefault();

    var form = $(this);
    var url = form.attr('action');
    
    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
    })
    .done(function(response) {
        if(response == "success") {
            jQuery(".response.success").show();
            jQuery(".response.error").hide();
            jQuery('input').val('');
			jQuery('input').prop( "checked", false );
            jQuery('textarea').val('');
        } else {
            jQuery(".response.success").hide();
            jQuery(".response.error").show();
        }
    });
});



// cookie
jQuery(document).ready(function($) {
  
    //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
    if( getCookie('popupCookie') != 'submited'){ 
      if(getCookie('popupCookie') != 'closed' ){
        $('.popup-overlay').css("display", "flex").hide().fadeIn();
      }
    }
    
    $('a.close').click(function(){
      $('.popup-overlay').fadeOut();
      //sets the coookie to one minute if the popup is closed (whole numbers = days)
      setCookie( 'popupCookie', 'closed', .00069444444 );
    });
    
    $('a.submit').click(function(){
      $('.popup-overlay').fadeOut();
      //sets the coookie to five minutes if the popup is submited (whole numbers = days)
      setCookie( 'popupCookie', 'submited', .0034722222 );
    });
  
    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
  });