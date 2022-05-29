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
  
$('.testimonail .single h3').equalizer();
$('.tab-holder .tab-single').equalizer();

// $('.custom').select2({
//     width: 'resolve'
// });

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

// Scroll Header
jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() > 100) {
        jQuery("header").addClass("scroll");
    } else {
        jQuery("header").removeClass("scroll");
    }
});

// Loader
jQuery(window).on('load', function () {
    jQuery('.loader').fadeOut('slow');
    
    // Onscroll animation
    AOS.init();
});


/* Overlay (Open / Close) */

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
  gsap.to(".overlay .overlay__close, .overlay .overlay__logo", {
    opacity: 1,
    ease: Sine.easeInOut,
    duration: 0.3,
  }),
  "<+=0.1"
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



/* Product (Slider) */

var product_single = new Swiper('.single-slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  slidesPerView: '1',
  pagination: {
      el: '.single-slider .bullets',
      bulletActiveClass: 'active',
      bulletClass: 'slide',
      modifierClass: '',
      clickable: true
  }
});

var product = new Swiper('.product-slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: '1',
    pagination: {
        el: '.product-slider .bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
  });

var text_slider = new Swiper('.text__slide', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: '1',
});



product.controller.control = text_slider;
text_slider.controller.control = product;


/* Testimonail (Slider) */

new Swiper('.testimonail__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  slidesPerView: 'auto',
  centeredSlides: true,
  navigation: {
    prevEl: ".testimonail-arrow__left",
    nextEl: ".testimonail-arrow__right",
},
});


// Filter Tab

$('.tabs__cats li:first-child').addClass('active');

$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('.tab-holder').mixItUp({
				selectors: {
  			  target: '.tab-single',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: 'all' // show app tab on first load
    		}     
			});								
		}
	};
	// Run the show!
	filterList.init();
});


// Music Player js

// player
var player = document.querySelectorAll('.player')
var music = document.querySelectorAll('.music-element')

function handlePlay(audio) {
    
    var card = document.getElementById(audio);
        audio_music = card.querySelector(".music-element");
        playBtn = card.querySelector(".play");
        playBtnPaused = card.querySelector(".pause");
        currentTime = card.querySelector(".current-time");
    
    if (audio_music.paused) {
        audio_music.play();
        playBtn.className = 'pause'
        playBtn.innerHTML = '<i class="fas fa-pause"></i>'
    } else {
        audio_music.pause();
        playBtnPaused.className = 'play'
        playBtnPaused.innerHTML = '<i class="fas fa-play"></i>'
    }
    audio_music.addEventListener('ended', function () {
        playBtnPaused.className = 'play'
        playBtnPaused.innerHTML = '<i class="fas fa-play"></i>'
        audio_music.currentTime = 0
    });
}

for(let i = 0; i < player.length; i++){
    let audio_music = player[i].querySelector(".music-element");
    let seekbar = player[i].querySelector('.seekbar')
    let duration = player[i].querySelector('.duration')
    let currentTime = player[i].querySelector('.current-time')
    audio_music.onloadeddata = function () {
        seekbar.max = audio_music.duration
        let ds = parseInt(audio_music.duration % 60)
        let dm = parseInt((audio_music.duration / 60) % 60)
        duration.innerHTML = dm + ':' + ds
    }
    audio_music.ontimeupdate = function () { seekbar.value = audio_music.currentTime }
    handleSeekBar = function () {
        audio_music.currentTime = seekbar.value 
    }
    audio_music.addEventListener('timeupdate', function () {
        let cs = parseInt(audio_music.currentTime % 60)
        let cm = parseInt((audio_music.currentTime / 60) % 60)
        currentTime.innerHTML = cm + ':' + cs
    }, false)
}


// volume

function handleVolume(ele) {
    var card = document.getElementById(ele);
    audio_music = card.querySelector(".music-element");
    button = card.querySelector(".volume");
    if (audio_music.muted) {
        audio_music.muted = false
        button.innerHTML = '<i class="fas fa-volume"></i>'
    } else {
        audio_music.muted = true
        button.innerHTML = '<i class="fas fa-volume-mute"></i>'
    }
}




// Custom drop down js
/*
*/

$('.custom').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.slideUp();
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
        console.log(response);
        if(response == 1) {
            form.find('.error').hide();
            form.find('.success').show();
        } else {
            form.find('.error').show();
            form.find('.success').hide();
        }
    });
  });


// Music Share Popup 
$('.music__share').hide();

$('.share').on('click', function(){
    $(this).parents('.player').find('.music__share').fadeIn();
    $('body').addClass('overflow-hidden');
});

$('.close').on('click', function(){
    $(this).parents('.player').find('.music__share').fadeOut();
    $('body').removeClass('overflow-hidden');

});