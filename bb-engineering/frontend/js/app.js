// Scroll Header
$(window).scroll(function () {
    if ($(document).scrollTop() > 20) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});
// Search Toggle
$(".nav-search").click(function(){
    $(".search-overlay").addClass("open-search-box");
});
$(".search-overlay-close").click(function(){
    $(".search-overlay").removeClass("open-search-box");
});

$(".current-lang").click(function(){
	$(this).next("ul").toggle();
    $(this).toggleClass("current-lang-open");
});


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

/* Menu (Sub menu) */
$(".main-nav ul ul ul li a").each(function() {
    if ($(this).next().length > 0) {
        $(this).addClass("megatoggle");
    };
})
$('.megatoggle').on('click', function(e) {
    e.preventDefault();
    $(this).next(".sub-menu").slideToggle();
    $(this).toggleClass('megatoggle-open');
  });

/* Overlay (Sub menu) */
$('.overlay .main-nav ul ul').each(function() {
    if($(this).children().length){
        $(this,'li:first').parent().addClass("menu-expand");
        $(this,'li:first').parent().children('a').append('<span><i class="far fa-angle-right"></i></span>');
    }
});

$('.menu-expand a').on("click",function(e){
    e.preventDefault();
        if ($(this).hasClass("menu-clicked")) {
            $(this).next('ul').slideUp(300, function(){});
    } else {
            $(this).next('ul').slideDown(300, function(){});
    }
    $(this).toggleClass("menu-clicked");
});



// Home Hero
var total = $(".hero .swiper-slide").length;
$(".hero .total").html(total);
$(".hero .current").html("1");

var banner_slider = new Swiper(".hero__slider", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    speed: 500,
    loop: true,

    on: {
        init: function () {
            $(".hero .swiper-progress-bar").removeClass("animate");
            $(".hero .swiper-progress-bar").removeClass("active");
            $(".hero .swiper-progress-bar").eq(0).addClass("animate");
            $(".hero .swiper-progress-bar").eq(0).addClass("active");
        },
        slideChangeTransitionStart: function () {
            $(".hero .swiper-progress-bar").removeClass("animate");
            $(".hero .swiper-progress-bar").removeClass("active");
            $(".hero .swiper-progress-bar").eq(0).addClass("active");
        },
        slideChangeTransitionEnd: function () {
            $(".hero .swiper-progress-bar").eq(0).addClass("animate");
        },
    },
});
$('.hero__slider').on('mouseenter', function(e){
    //console.log('stop autoplay');
    $(".hero .swiper-progress-bar").removeClass("animate");
    banner_slider.autoplay.stop();
});
$('.hero__slider').on('mouseleave', function(e){
    //console.log('start autoplay');
    banner_slider.autoplay.start();
    $(".hero .swiper-progress-bar").addClass("animate");
});
banner_slider.on("transitionEnd", function () {
    $(".hero .current").html(banner_slider.realIndex + 1);
});


/* Video Overlay */

$('[data-overlay-trigger]').click(function() {
    var id = $(this).data('overlay-trigger');
    $('[data-overlay="'+id+'"]').css('display', 'flex').hide().fadeIn(500);
});
  
$('.video-overlay .video-overlay__close').click(function() {
    $(this).parent().fadeOut(500);
});

if ($(".produkt-info")[0]){
// Product menu
var stickyTop = $('.produkt-info').offset().top;
var headerHeight = $("header").innerHeight();
$(window).scroll(function () {
    if ($(document).scrollTop() > stickyTop - headerHeight) {
        $(".product-menu").addClass("product-menu-scroll");
    } else {
        $(".product-menu").removeClass("product-menu-scroll");
    }
});
}

//
if($('#productdetails').length){
const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 10);
			
			video.currentTime = video.duration * percentScrolled;
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}
registerVideo("#productdetails", "#productdetails video");
    $(window).scroll(function () {
        if ($(document).scrollTop() > 80) {
            $("#productdetails .product-hero-content").fadeOut(300);
        } else {
            $("#productdetails .product-hero-content").fadeIn(300);
        }
    });

}


// Counter
var a = 0;
$(window).scroll(function() {
const counter = document.querySelector("#counter");
if(!document.body.contains(counter)) return;
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

// jQueryEqualHeight
$(window).on('load', function(event) {
    $('.jQueryEqualHeight').jQueryEqualHeight('.product-box__single_text h3');
    $('.jQueryEqualHeight').jQueryEqualHeight('.product-box__single_text p');
    $('.jQueryEqualHeight').jQueryEqualHeight('.benefit-section-right p');
    $('.jQueryEqualHeight').jQueryEqualHeight('.news-box__single_text h4');
    $('.jQueryEqualHeight').jQueryEqualHeight('.offene-stellen-box p');
    $('.jQueryEqualHeight').jQueryEqualHeight('.offene-stellen-box p');
    $('.jQueryEqualHeight').jQueryEqualHeight('.offene-stellen-box h4');
    $('.jQueryEqualHeight').jQueryEqualHeight('.product-overview-box-text h2');
    $('.jQueryEqualHeight').jQueryEqualHeight('.box-holder .address');
});



// History Year Slider
var historyLeftTotal = $(".history-left-slider .swiper-slide").length;
var totalPercent = 100 / historyLeftTotal;
console.log(totalPercent);

var history_left = new Swiper(".history-left-slider", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    //loop: true,
    navigation: {
        nextEl: ".history-arrow-down",
        prevEl: ".history-arrow-up",
    },
    pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
});

$(".roundbox-path").attr("stroke-dashoffset", 100 - (totalPercent * 1));
history_left.on("slideChangeTransitionStart", function () {
    $(".roundbox-path").attr( "stroke-dashoffset", 100 - (totalPercent * ( history_left.realIndex + 1)));
    playTime = 1000 * 1.05;
});

var history_right = new Swiper('.history-right-slider', {
    direction: 'vertical',
    speed: 800,
    mousewheel: true,
    //loop: true,
    grabCursor: true,
    slidesPerView: 3,

});

/* -----------------------------
// History Content (Slider)
-------------------------------*/  
history_right.on('slideChangeTransitionStart', function() {
    history_left.slideTo(history_right.activeIndex);
});

history_left.on('transitionStart', function(){
    history_right.slideTo(history_left.activeIndex);
});
if (history_right.realIndex > 0) {
    playTime = 1000 * 1.15;
} else {
    playTime = 1000 * 1.05;
}       





/* Smooth Scroll */
jQuery(function () {
    jQuery('a[href*="#"]:not([href="#"]):not(.tab-link)').click(function () {
        if (
            location.pathname.replace(/^\//, "") ===
                this.pathname.replace(/^\//, "") &&
            location.hostname === this.hostname
        ) {
        var target = jQuery(this.hash);
        target = target.length
            ? target
            : jQuery("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                jQuery("html, body").animate(
                {
                    scrollTop: target.offset().top - 100,
                },
                1000
            );
            return false;
            }
        }
    });    
});

// produkt-info-tab-slide
var productInfo = new Swiper(".produkt-info-tab-slide", {
    direction: "horizontal",
    slidesPerView: "auto",
    centeredSlides: false,
    paginationClickable: true,
    loop: true,
    allowTouchMove: false,
    slideToClickedSlide: true,
    //loop: true,
    navigation: {
        nextEl: ".produkt-info-arrow-down",
        prevEl: ".produkt-info-arrow-up",
    }    
});
    $(window).resize(function(){
        var productInfo = new Swiper(".produkt-info-tab-slide", {
            direction: "horizontal",
            slidesPerView: "auto",
            centeredSlides: false,
            paginationClickable: true,
            loop: true,
            allowTouchMove: false,
            slideToClickedSlide: true,
            //loop: true,
            navigation: {
                nextEl: ".produkt-info-arrow-down",
                prevEl: ".produkt-info-arrow-up",
            }    
        });
    });

//  Tab Script
$(".produkt-info-tab-content").hide();
$(".produkt-info-tab-content:first").show();
$(".produkt-tab-menu li:first").addClass("current");

$(".produkt-tab-menu li").click(function(event) {
    event.preventDefault();
    var homeTab = $(this).attr("data-tab");
    $(".produkt-info-tab-content").not(homeTab).hide();
    $(homeTab).fadeIn();
});


// produkt-picture
var productPicture = new Swiper(".product-picture-slider", {
    direction: "horizontal",
    slidesPerView: 1,
    centeredSlides: false,
    paginationClickable: true,
    loop: true,
    //loop: true,
    navigation: {
        nextEl: ".product-picture-next",
        prevEl: ".product-picture-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// produkt-picture
var productOverviewSlide = new Swiper(".product-overview--slide", {
    direction: "horizontal",
    slidesPerView: 1,
    effect: "fade",
    centeredSlides: false,
    paginationClickable: true,
    loop: true,
    //loop: true,
    navigation: {
        nextEl: ".product-overview-next",
        prevEl: ".product-overview-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// produkt-picture
var productOverviewSlide = new Swiper(".product-overview--slide", {
    direction: "horizontal",
    slidesPerView: 1,
    effect: "fade",
    centeredSlides: false,
    paginationClickable: true,
    loop: true,
    //loop: true,
    navigation: {
        nextEl: ".product-overview-next",
        prevEl: ".product-overview-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// testimonial-slider
var testimonialSlider = new Swiper(".testimonial-slider", {
    direction: "horizontal",
    centeredSlides: false,
    paginationClickable: true,
    loop: true,
    //loop: true,
    navigation: {
        nextEl: ".product-overview-next",
        prevEl: ".product-overview-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1479: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

// Select 2
$('.filter_select').select2({
    width:"100%"
});

// testimonial-customer
var testimonialCustomer = new Swiper(".testimonial-customer-slide", {
    direction: "horizontal",
    centeredSlides: false,
    paginationClickable: true,
        slidesPerView: 1,
        loop: true,
    //loop: true,
    navigation: {
        nextEl: ".product-overview-next",
        prevEl: ".product-overview-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});


//list ang gris view
jQuery(function($) {

	$('.grid-list-bar-inner a').on('click', function() {
		var tab_id = $(this).attr('data-tab');

		$('a').removeClass('current');
		$('.view').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

}(jQuery));

// Fancybox Gallery
if ($(".picture-gallery-box-img")[0]){
    $(".picture-gallery-box-img").fancybox();
}

//pagination_cange
if ($(".pagination_cange")[0]){
$(".pagination_cange a.prev").html(`
<svg id="Group_179530" data-name="Group 179530" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15.518" height="7.788" viewBox="0 0 15.518 7.788">
<defs>
    <clipPath id="clip-path">
    <rect id="Rectangle_152687" data-name="Rectangle 152687" width="15.518" height="7.788" fill="#0d0d0c"/>
    </clipPath>
</defs>
<g id="Group_179529" data-name="Group 179529" clip-path="url(#clip-path)">
    <path id="Path_133235" data-name="Path 133235" d="M0,3.833c.079-.247.268-.295.5-.294q6.789,0,13.578,0H14.3c-.065-.07-.1-.114-.144-.155L11.472.693c-.029-.029-.058-.056-.085-.086a.35.35,0,1,1,.49-.5c.034.03.066.062.1.095l3.354,3.353c.251.251.252.421.005.668L11.927,7.632a.364.364,0,0,1-.534.066.335.335,0,0,1-.056-.451,1.374,1.374,0,0,1,.151-.169L14.166,4.4c.038-.038.074-.078.141-.148h-.223q-6.8,0-13.593,0A.467.467,0,0,1,0,3.984Z" transform="translate(0 0)" fill="#0d0d0c"/>
</g>
</svg>`);
$(".pagination_cange a.next").html(`
<svg id="Group_179530" data-name="Group 179530" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15.518" height="7.788" viewBox="0 0 15.518 7.788">
<defs>
    <clipPath id="clip-path">
    <rect id="Rectangle_152687" data-name="Rectangle 152687" width="15.518" height="7.788" fill="#0d0d0c"/>
    </clipPath>
</defs>
<g id="Group_179529" data-name="Group 179529" clip-path="url(#clip-path)">
    <path id="Path_133235" data-name="Path 133235" d="M0,3.833c.079-.247.268-.295.5-.294q6.789,0,13.578,0H14.3c-.065-.07-.1-.114-.144-.155L11.472.693c-.029-.029-.058-.056-.085-.086a.35.35,0,1,1,.49-.5c.034.03.066.062.1.095l3.354,3.353c.251.251.252.421.005.668L11.927,7.632a.364.364,0,0,1-.534.066.335.335,0,0,1-.056-.451,1.374,1.374,0,0,1,.151-.169L14.166,4.4c.038-.038.074-.078.141-.148h-.223q-6.8,0-13.593,0A.467.467,0,0,1,0,3.984Z" transform="translate(0 0)" fill="#0d0d0c"/>
</g>
</svg>`);
}

// Data Filter
$('[data-filter]').change(function () {
    $('[data-filter-item]').hide();
    let filter = $(this).val();
    if (filter === "*") {
        $('[data-filter-item]').show();
    } else {
        $('[data-filter-item="' + filter + '"]').show();
    }
});

// Job Data Filter
var careerFilter = {type: "",  location: ""};
var countFilter = $(".fachkrafteListLength").length;
$(".filterCount").html(countFilter);
$('.joboverview [data-filter]').change(function() {
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
        if(careerFilter.location != "" && $(this).data('location') != careerFilter.location) {
            match = false;
        }
        if(match) {
            $(this).show();
            jobs++;
        } else {
            $(this).hide();
        }
    });
    $('.filterCount').text(jobs / 2);
});