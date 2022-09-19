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

$(".product-single-gallery .single .image").equalizer();
$(".product-single-gallery .single h4").equalizer();

let header = $("header").height();

// AOS
AOS.init();

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
// Open DropDown menu
// <!-------------------------------------------------------->
if (width < 1199.99) {
    $("body").on("click", ".megamenu-open a", function (e) {
        e.preventDefault();
        // Get subMenu and put it inside mega menu
        let text = $(this).html();
        let subMenu = $(this).siblings(".sub-menu");
        let menu_content = subMenu.clone();
        $(".mega-menu .menu--1 .holder").html(menu_content);
        $(".mega-menu .menu--1 h5").html(text);
        $(".menu--1").nextAll(".menu").removeClass("open");
        $(".menu--1").nextAll(".menu").find(".holder").html("");
        $(".menu--1").nextAll(".menu").find("h5").html("");
        $(".menu").removeClass("open");

        $(".mega-menu").addClass("open");
        $("body").addClass("overflow-hidden");
        $("header ul li").removeClass("current-menu-item");
        $(this).parent().addClass("current-menu-item");
    });
}

// <!-------------------------------------------------------->
// DropDown Menu (Arrow append to those have submenu)
// <!-------------------------------------------------------->

$('<i class="far fa-chevron-right"></i>').appendTo(
    ".sub-menu .menu-item-has-children > a"
);

// <!-------------------------------------------------------->
//  Dropdown Menu Click
// <!-------------------------------------------------------->

function menuClick(count) {
    $("body").on("click", ".menu--" + count + " ul li a i", function (e) {
        if ($(this).parents("li").hasClass("menu-item-has-children")) {
            e.preventDefault();
            let heading = $(this).parent().clone();
            let subMenu = $(this).parent().siblings(".sub-menu");
            let menu_content = subMenu.clone();

            $(".menu--" + (count + 1) + " .holder").html(menu_content);
            $(".menu--" + (count + 1) + " h5").html(heading);

            // Active Class
            $(this).parents("ul").find("li").removeClass("active");
            $(this).parents("li").addClass("active");

            // Remove all the next menu
            $(".menu--" + (count + 1))
                .nextAll(".menu")
                .find(".holder")
                .html("");
            $(".menu--" + (count + 1))
                .nextAll(".menu")
                .find("h5")
                .html("");
            $(".menu--" + (count + 1))
                .nextAll(".menu")
                .removeClass("open");
            // open menu

            $(".menu--" + (count + 1)).addClass("open");
            //$(".menu").removeClass("open");

            // Add back button
            let text = $(this).parent().html();
            $(".menu--" + (count + 1) + " .sub-menu").prepend(
                "<li class='back' data=" +
                    "menu--" +
                    (count + 1) +
                    '><i class="fal fa-long-arrow-left"></i>' +
                    text +
                    "</li>"
            );
        } else {
            $(".menu--" + (count + 1)).removeClass("open");
        }
    });
}

if (width < 1199.99) {
    menuClick(1);
    menuClick(2);
}

// <!-------------------------------------------------------->
// Closing the dropdown
// <!-------------------------------------------------------->

$("body").on("click", "#close", function (e) {
    e.preventDefault();
    $(".mega-menu").removeClass("open");
    $("body").removeClass("overflow-hidden");
    $(".header-white").addClass("white");
    $(".handbuch").removeClass("current-menu-item");
    $(".menu--2, .menu--3, .menu--4, .menu--5, .menu--6")
        .removeClass("open")
        .html("");
    $(".mega-menu .menu-item-has-children").removeClass("active");
});

// <!-------------------------------------------------------->
// Mobile Mega menu back screen
// <!-------------------------------------------------------->
$("body").on("click", ".mega-menu .sub-menu .back", function (e) {
    e.preventDefault();
    let data = $(this).attr("data");
    $("." + data).removeClass("open");
    $("." + data)
        .nextAll(".menu")
        .removeClass("open");
    $("." + data)
        .nextAll(".menu")
        .find(".holder")
        .html("");
    $("." + data)
        .nextAll(".menu")
        .find("h5")
        .html("");
});

// <!-------------------------------------------------------->
/* Overlay (Open / Close) */
// <!-------------------------------------------------------->

var tl = gsap.timeline({ paused: true });

tl.add(gsap.to(".overlay", { y: "0", ease: Sine.easeInOut, duration: 0.5 }), 0);

tl.addLabel("main-nav", ">");

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
    gsap.to(".overlay .overlay__close", {
        opacity: 1,
        ease: Sine.easeInOut,
        duration: 0.3,
    }),
    "secondary-nav-=0.2"
);

tl.add(
    gsap.from(".overlay .overlay__logo", {
        opacity: 1,
        ease: Sine.easeInOut,
        duration: 0.3,
    }),
    "slogan-=0.2"
);

$("header .nav-toggle, .overlay .overlay__close").click(function () {
    $(".mega-menu").removeClass("open");
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

/* -----------------------------
/* Video Play (Slider)
-------------------------------*/

$(".video-text .play").click(function () {
    let button = $(this);
    button.parent().find("video")[0].play();
    button.parent().find("video").attr("controls", "true");
    button.parent().find(".thumbnail").fadeOut();
    button.fadeOut();
});

/* -----------------------------
/* Service Slider (Slider)
-------------------------------*/

var total = $(".service-slider .service-slider__image .swiper-slide").length;
$(".service-slider .service-slider__control .total").html("0" + total);
$(".service-slider .service-slider__control .current").html("01");

var service_slider_image = new Swiper(".service-slider__image .slider", {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    slidesPerView: "auto",
    navigation: {
        prevEl: ".service-slider .service-slider__control .left",
        nextEl: ".service-slider .service-slider__control .right",
    },
});

var service_slider_text = new Swiper(".service-slider__text .slider", {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    slidesPerView: "auto",
});

service_slider_image.on("transitionEnd", function () {
    $(".service-slider .service-slider__control .current").html(
        "0" + (service_slider_image.realIndex + 1)
    );
});

service_slider_image.controller.control = this.service_slider_text;
service_slider_text.controller.control = this.service_slider_image;

// <!-------------------------------------------------------->
// Tabs (Teams)
// <!-------------------------------------------------------->

// Active Child
$(".teams__nav .item:first-child").addClass("active");
$(".teams__content .single:first-child").addClass("active");

// Add Slider Counter
$(".teams__content .single").each(function (i, item) {
    let $this = $(item);
    let $total = $(item).find(".total");
    let $current = $(item).find(".current");
    let counts = $this.find(".slider__image .swiper-slide").length;
    if (counts > 1) {
        $total.html("0" + counts);
        $current.html("01");
    }
});

function sliderCount() {
    var i = $(".teams__content .slider__image .swiper-slide").length;
    $(".teams__content .single .total").html("0" + i);
    $(".teams__content .single .current").html("01");
}

// Check if the team number is Grater than 1 or not
function check() {
    let $this = $(".teams__content .single.active");
    let counts = $this.find(".slider__image .swiper-slide").length;
    if (counts > 1 && $this.find(".swiper-container").length === 0) {
        $this.find(".slider__image").addClass("swiper-container");
        $this.find(".slider__content").addClass("swiper-container");
    }
}
check();

function swiperSlider() {
    let $this = $(".teams__content .single.active");
    let counts = $this.find(".slider__image .swiper-slide").length;
    if (counts > 1 && $this.find(".swiper-container").length !== 0) {
        var team_slider_image = new Swiper(
            ".teams__content .single.active .slider__image.swiper-container",
            {
                direction: "horizontal",
                speed: 1000,
                loop: true,
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".teams__content .single.active .slider__control .left",
                    nextEl: ".teams__content .single.active .slider__control .right",
                },
            }
        );

        var team_slider_text = new Swiper(
            ".teams__content .single.active .slider__content.swiper-container",
            {
                direction: "horizontal",
                speed: 1000,
                loop: true,
                slidesPerView: "auto",
            }
        );

        team_slider_image.on("transitionEnd", function () {
            $(".teams__content .single.active .current").html(
                "0" + (team_slider_image.realIndex + 1)
            );
        });

        team_slider_image.controller.control = this.team_slider_text;
        team_slider_text.controller.control = this.team_slider_image;
    }
}
swiperSlider();

// Tab Item On Click
$(".teams__nav .item").on("click", function (e) {
    e.preventDefault();
    const id = $(this).attr("data-id");
    $(".teams__nav .item").not(this).removeClass("active");
    $(this).addClass("active");

    $(".teams__content .single").not(this).removeClass("active");
    $(".teams__content " + "#" + id).addClass("active");

    check();
    swiperSlider();
});

// <!-------------------------------------------------------->
// Slider (History)
// <!-------------------------------------------------------->

var history_total = $(".history__image .swiper-slide").length;
$(".history__control .total").html("0" + history_total);
$(".history__control .current").html("01");

var history_slider_image = new Swiper(".history__image .slider", {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    slidesPerView: "auto",
    navigation: {
        prevEl: ".history__control .left",
        nextEl: ".history__control .right",
    },
});

var history_slider_text = new Swiper(".history__text .slider", {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    slidesPerView: "auto",
});

history_slider_image.on("transitionEnd", function () {
    $(".history__control .current").html(
        "0" + (history_slider_image.realIndex + 1)
    );
});

history_slider_image.controller.control = this.history_slider_text;
history_slider_text.controller.control = this.history_slider_image;

/* -----------------------------
/* History  (Slider)
-------------------------------*/

let logos = new Swiper(".testimonial .slider", {
    direction: "horizontal",
    loop: true,
    speed: 500,
    slidesPerView: "auto",
    navigation: {
        prevEl: ".testimonial__control .left",
        nextEl: ".testimonial__control .right",
    },
});

/* -----------------------------
/* Partner  (Slider)
-------------------------------*/
if (width < 799.99) {
    let partner = new Swiper(".partner .slider", {
        direction: "horizontal",
        loop: true,
        speed: 1000,
        slidesPerView: "auto",
        pagination: {
            el: ".partner .bullets",
            bulletActiveClass: "active",
            bulletClass: "slide",
            modifierClass: "",
            clickable: true,
        },
    });
}

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
/// Media Count
// <!-------------------------------------------------------->

media_count = $(".unsere-bilder .col-lg-4").length;

item = 6;
$(".unsere-bilder .col-lg-4:lt(" + item + ")").show();
if (media_count > item) {
    $(".unsere-bilder .close").css("display", "flex").show();
}

$(".unsere-bilder .close").click(function (e) {
    e.preventDefault();
    item = item + item <= media_count ? item + 3 : media_count;
    $(".unsere-bilder .col-lg-4:lt(" + item + ")").show();
    if (item == media_count) {
        $(".unsere-bilder .close").fadeOut("slow");
    }
});

// <!-------------------------------------------------------->
/// Job Listing
// <!-------------------------------------------------------->

$(".jobs-overview__filter [data-filter]").change(function () {
    var value = $(this).val();
    $(".jobs-overview__jobs [jobs]").each(function () {
        if (value == "*" || $(this).data("cat") == value) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

var jobFilter = { anstellungsart: "", abteilung: "" };

$(".jobs-overview__filter [data-filter]").change(function () {
    var filter = $(this).data("filter");
    value = $(this).val();

    if (value == "*") {
        jobFilter[filter] = "";
    } else {
        jobFilter[filter] = value;
    }

    $("[jobs]").each(function () {
        var match = true;

        if (
            jobFilter.anstellungsart != "" &&
            $(this).data("anstellungsart") != jobFilter.anstellungsart
        ) {
            match = false;
        }
        if (
            jobFilter.abteilung != "" &&
            $(this).data("abteilung") != jobFilter.abteilung
        ) {
            match = false;
        }
        if (match) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

/* Jobs */
$(
    ".jobs-overview .jobs-overview__jobs .overview .job .info .title"
).equalizer();

$(".jobs-overview .jobs-overview__jobs .select-view button").click(function () {
    var view = $(this).data("view");

    $(".jobs-overview .jobs-overview__jobs .select-view button").removeClass(
        "active"
    );
    $(this).addClass("active");

    $(".jobs-overview .jobs-overview__jobs .overview").hide();
    $(
        '.jobs-overview .jobs-overview__jobs .overview[data-view="' +
            view +
            '"]'
    ).show();

    $(
        ".jobs-overview .jobs-overview__jobs .overview .job .info .title"
    ).equalizer();
    $(".jobs-overview .jobs-overview__jobs .overview .job").equalizer();
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
