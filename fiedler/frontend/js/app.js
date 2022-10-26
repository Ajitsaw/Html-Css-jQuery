/* Equalizer */

$.fn.extend({
    equalizer: function () {
        let minHeight = 0;
        $(this).each(function () {
            if ($(this).outerHeight() > minHeight) {
                minHeight = $(this).outerHeight();
            }
        });
        $(this).css("min-height", minHeight + "px");
    },
});

$(".versprechen .single .icon").equalizer();

let header = $("header").height();

// AOS
// AOS.init();

//window Width

let width = $(window).width();

/* Smooth Scroll */
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ===
                this.pathname.replace(/^\//, "") &&
            location.hostname === this.hostname
        ) {
            let target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - header,
                    },
                    1000
                );
                return false;
            }
        }
    });
});

// Scroll Header

$(window).scroll(function () {
    if ($(document).scrollTop() > header + 50) {
        $("header").addClass("top");
    } else {
        $("header").removeClass("top");
    }

    if ($(document).scrollTop() > header + 100) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});

// <!-------------------------------------------------------->
// Search Popup Js
// <!-------------------------------------------------------->

$(".search").on("click", function (e) {
    e.preventDefault();
    $("#search").addClass("open");
    $("#search input").focus();
});

$(".popup-cross").on("click", function () {
    $("#search").removeClass("open");
});

// <!-------------------------------------------------------->
/* Overlay (Open / Close) */
// <!-------------------------------------------------------->

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
    gsap.to(".overlay .head", {
        opacity: 1,
        ease: Sine.easeInOut,
        duration: 0.3,
    }),
    "secondary-nav-=0.2"
);
tl.add(
    gsap.from(".overlay .secondary-nav ul li", {
        y: "30px",
        opacity: 0,
        ease: Sine.easeInOut,
        duration: 0.3,
        stagger: 0.1,
    }),
    "secondary-nav-=0.2"
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

$(".overlay .main-nav ul li.menu-item-has-children > a").click(function (e) {
    e.preventDefault();

    var submenu = $(this).next(".sub-menu");

    if ($(this).parents("li").hasClass("opened")) {
        $(".overlay .main-nav ul li.menu-item-has-children").removeClass(
            "opened"
        );
    } else {
        $(this).parents("li").addClass("opened");
    }

    $(".overlay .main-nav ul li .sub-menu").not(submenu).slideUp(500);
    $(this).next(".sub-menu").slideToggle(500);
});

/* -----------------------------
/* Banner (Slider)
-------------------------------*/
var total = $(".hero  .slider .swiper-slide").length;
$(".hero .total").html("0" + total);
$(".hero .current").html("01");

var banner = new Swiper(".hero .slider", {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: "auto",
    pagination: {
        el: ".hero .bullets",
        bulletActiveClass: "active",
        bulletClass: "slide",
        modifierClass: "",
        clickable: true,
    },
});

var banner_title = new Swiper(".hero .title__slider", {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: "auto",
});

// Sync
banner.controller.control = banner_title;
banner_title.controller.control = banner;

banner.on("transitionEnd", function () {
    $(".hero .current").html("0" + (banner.realIndex + 1));
});

/* -----------------------------
/* Kompetenzen (Slider)
-------------------------------*/

var kompetenzen = new Swiper(".kompetenzen .slider", {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: "auto",
    navigation: {
        prevEl: ".slider__arrow .left",
        nextEl: ".slider__arrow .right",
    },
});

$(".kompetenzen .slider .swiper-slide .icon").equalizer();
$(".kompetenzen .slider .swiper-slide h4").equalizer();
$(".kompetenzen .slider .swiper-slide p").equalizer();

/* -----------------------------
/* Image (Slider)
-------------------------------*/

var image_slider = new Swiper(".image-slider .image", {
    direction: "horizontal",
    speed: 500,
    loop: true,
    slidesPerView: "auto",
    // centeredSlides: true,
    navigation: {
        prevEl: ".image-slider .left",
        nextEl: ".image-slider .right",
    },
});

var image_content = new Swiper(".image-slider .content .slider", {
    direction: "horizontal",
    speed: 500,
    loop: true,
    slidesPerView: "auto",
    // centeredSlides: false,
    // initialSlide: 1,
});

// Sync
image_slider.controller.control = image_content;
image_content.controller.control = image_slider;

banner.on("transitionEnd", function () {
    $(".hero .current").html("0" + (banner.realIndex + 1));
});

/* -----------------------------
// CountUp
-------------------------------*/

var a = 0;
$(window).scroll(function () {
    if ($("#counter").length) {
        var oTop = $("#counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".counter-value").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-count");
                $({
                    countNum: $this.text(),
                }).animate(
                    {
                        countNum: countTo,
                    },

                    {
                        duration: 2000,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        },
                    }
                );
            });
            a = 1;
        }
    }
});

// <!-------------------------------------------------------->
// Accordion
// <!-------------------------------------------------------->

$(".acc-title").click(function () {
    $(this).toggleClass("open");
    $accordion_content = $(this).next(".acc-content");
    $(".acc-content").not($accordion_content).slideUp();
    $(".acc-content")
        .not($accordion_content)
        .prev(".acc-title")
        .removeClass("open");
    $accordion_content.stop(true, true).slideToggle(400);
});

/* Video Overlay */

$("[data-overlay-trigger]").click(function (e) {
    e.preventDefault();
    var id = $(this).data("overlay-trigger");
    $('[data-overlay="' + id + '"]')
        .css("display", "flex")
        .hide()
        .fadeIn(500);
});

$(".video-overlay .video-overlay__close").click(function () {
    $(this).parent().fadeOut(500);
});

// <!-------------------------------------------------------->
/// FAQ Count
// <!-------------------------------------------------------->

size_faq = $(".faq__accordion .accordion").length;

item = 3;
$(".faq__accordion .accordion:lt(" + item + ")").show();
if (size_faq > item) {
    $(".faq .close").css("display", "flex").show();
}

$(".faq .close").click(function (e) {
    e.preventDefault();
    item = item + item <= size_faq ? item + 10 : size_faq;
    $(".faq__accordion .accordion:lt(" + item + ")").show();
    if (item == size_faq) {
        $(".faq .close").fadeOut("slow");
    }
});

// <!-------------------------------------------------------->
/// Filter Listing
// <!-------------------------------------------------------->

$(".filter__category [data-filter]").change(function () {
    var value = $(this).val();
    $(".filter__tile [filter]").each(function () {
        if (value == "*" || $(this).data("cat") == value) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

var dataFilter = { stadt: "", alter: "", rate: "" };

$(".filter__category [data-filter]").change(function () {
    var filter = $(this).data("filter");
    value = $(this).val();

    if (value == "*") {
        dataFilter[filter] = "";
    } else {
        dataFilter[filter] = value;
    }

    $("[filter]").each(function () {
        var match = true;

        if (
            dataFilter.stadt != "" &&
            $(this).data("stadt") != dataFilter.stadt
        ) {
            match = false;
        }
        if (
            dataFilter.alter != "" &&
            $(this).data("alter") != dataFilter.alter
        ) {
            match = false;
        }
        if (dataFilter.rate != "" && $(this).data("rate") != dataFilter.rate) {
            match = false;
        }
        if (match) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

/* Ajax Form */

$(".ajax-form").submit(function (e) {
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
            form.find(".error").hide();
            form.find(".success").show();
        } else {
            form.find(".error").show();
            form.find(".success").hide();
        }
    });
});
