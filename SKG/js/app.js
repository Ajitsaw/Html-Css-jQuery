// Home Product Slider
var productImage = new Swiper('.product-single-slider--imgslide', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 1,
    centeredSlides: false,
    // autoplay: {
    //     delay: 5000,
    //     pauseOnMouseEnter: true
    // },
    autoplay: false,
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    },
    navigation: {
        nextEl: '.projekte-button-next',
        prevEl: '.projekte-button-prev',
    }, 
  });
  
  var productContent = new Swiper('.product-single-slider--contentslide', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 1,
    centeredSlides: false,
    // autoplay: {
    //     delay: 5000,
    //     pauseOnMouseEnter: true
    // },
    autoplay: false,
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    },
    navigation: {
        nextEl: '.projekte-button-next',
        prevEl: '.projekte-button-prev',
    }, 
});
  
productImage.on('slideChangeTransitionStart', function() {
    productContent.slideTo(productImage.activeIndex);
});
productContent.on('transitionStart', function(){
    productImage.slideTo(productContent.activeIndex);
});
  

// Equal Height
$(window).on('load', function(event) {
    $('.jQueryEqualHeight').jQueryEqualHeight('.downloads-pdf-single-holder-title');
    $('.jQueryEqualHeight').jQueryEqualHeight('.about-historie__slide__single__content');
});


// Select 2
$('.filter_select').select2({
    width:"100%"
});

// Counter Up
var a = 0;
$(window).scroll(function() {

var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
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

//about-historie__slide
new Swiper('.about-historie__slide', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    // autoplay: {
    //     delay: 5000,
    //     pauseOnMouseEnter: true
    // },
    autoplay: false,
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    },
    navigation: {
        nextEl: '.historie-button-next',
        //prevEl: '.historie-button-prev',
    }, 
});

/* Home Customers (Slider) */


new Swiper('.customer-slider', {
    direction: 'horizontal',
    loop: true,
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    grabCursor: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    }
  });
  
  new Swiper('.customer-slider_reversed', {
    direction: 'horizontal',
    loop: true,
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    grabCursor: false,
    slidesPerView: 'auto',
    allowTouchMove: false,
    centeredSlides: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
        waitForTransition: true,
      enabled: true,
    }
});