!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*! fancyBox v2.1.7 fancyapps.com | fancyapps.com/fancybox/#license */
(function (t, J, f, x) {
    var L = f("html"),
        q = f(t),
        p = f(J),
        b = (f.fancybox = function () {
            b.open.apply(this, arguments);
        }),
        K = navigator.userAgent.match(/msie/i),
        D = null,
        u = J.createTouch !== x,
        v = function (a) {
            return a && a.hasOwnProperty && a instanceof f;
        },
        r = function (a) {
            return a && "string" === f.type(a);
        },
        G = function (a) {
            return r(a) && 0 < a.indexOf("%");
        },
        m = function (a, c) {
            var d = parseInt(a, 10) || 0;
            c && G(a) && (d *= b.getViewport()[c] / 100);
            return Math.ceil(d);
        },
        y = function (a, b) {
            return m(a, b) + "px";
        };
    f.extend(b, {
        version: "2.1.7",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !u,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
            iframe: { scrolling: "auto", preload: !0 },
            swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
            keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] },
            direction: { next: "left", prev: "right" },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe:
                    '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (K ? ' allowtransparency="true"' : "") +
                    "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading: '<div id="fancybox-loading"><div></div></div>',
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: { overlay: !0, title: !0 },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop,
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: { timer: null, isActive: !1 },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (a, c) {
            if (a && (f.isPlainObject(c) || (c = {}), !1 !== b.close(!0)))
                return (
                    f.isArray(a) || (a = v(a) ? f(a).get() : [a]),
                    f.each(a, function (d, e) {
                        var k = {},
                            g,
                            l,
                            h,
                            n,
                            m;
                        "object" === f.type(e) &&
                            (e.nodeType && (e = f(e)),
                            v(e)
                                ? ((k = {
                                      href: e.data("fancybox-href") || e.attr("href"),
                                      title: f("<div/>")
                                          .text(e.data("fancybox-title") || e.attr("title") || "")
                                          .html(),
                                      isDom: !0,
                                      element: e,
                                  }),
                                  f.metadata && f.extend(!0, k, e.metadata()))
                                : (k = e));
                        g = c.href || k.href || (r(e) ? e : null);
                        l = c.title !== x ? c.title : k.title || "";
                        n = (h = c.content || k.content) ? "html" : c.type || k.type;
                        !n && k.isDom && ((n = e.data("fancybox-type")), n || (n = (n = e.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null));
                        r(g) &&
                            (n || (b.isImage(g) ? (n = "image") : b.isSWF(g) ? (n = "swf") : "#" === g.charAt(0) ? (n = "inline") : r(e) && ((n = "html"), (h = e))),
                            "ajax" === n && ((m = g.split(/\s+/, 2)), (g = m.shift()), (m = m.shift())));
                        h || ("inline" === n ? (g ? (h = f(r(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g)) : k.isDom && (h = e)) : "html" === n ? (h = g) : n || g || !k.isDom || ((n = "inline"), (h = e)));
                        f.extend(k, { href: g, type: n, content: h, title: l, selector: m });
                        a[d] = k;
                    }),
                    (b.opts = f.extend(!0, {}, b.defaults, c)),
                    c.keys !== x && (b.opts.keys = c.keys ? f.extend({}, b.defaults.keys, c.keys) : !1),
                    (b.group = a),
                    b._start(b.opts.index)
                );
        },
        cancel: function () {
            var a = b.coming;
            (a && !1 === b.trigger("onCancel")) ||
                (b.hideLoading(),
                a &&
                    (b.ajaxLoad && b.ajaxLoad.abort(),
                    (b.ajaxLoad = null),
                    b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null),
                    a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(),
                    (b.coming = null),
                    b.current || b._afterZoomOut(a)));
        },
        close: function (a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") &&
                (b.unbindEvents(),
                b.isActive &&
                    (b.isOpen && !0 !== a
                        ? ((b.isOpen = b.isOpened = !1), (b.isClosing = !0), f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())
                        : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut())));
        },
        play: function (a) {
            var c = function () {
                    clearTimeout(b.player.timer);
                },
                d = function () {
                    c();
                    b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed));
                },
                e = function () {
                    c();
                    p.unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd");
                };
            !0 === a || (!b.player.isActive && !1 !== a)
                ? b.current &&
                  (b.current.loop || b.current.index < b.group.length - 1) &&
                  ((b.player.isActive = !0), p.bind({ "onCancel.player beforeClose.player": e, "onUpdate.player": d, "beforeLoad.player": c }), d(), b.trigger("onPlayStart"))
                : e();
        },
        next: function (a) {
            var c = b.current;
            c && (r(a) || (a = c.direction.next), b.jumpto(c.index + 1, a, "next"));
        },
        prev: function (a) {
            var c = b.current;
            c && (r(a) || (a = c.direction.prev), b.jumpto(c.index - 1, a, "prev"));
        },
        jumpto: function (a, c, d) {
            var e = b.current;
            e &&
                ((a = m(a)),
                (b.direction = c || e.direction[a >= e.index ? "next" : "prev"]),
                (b.router = d || "jumpto"),
                e.loop && (0 > a && (a = e.group.length + (a % e.group.length)), (a %= e.group.length)),
                e.group[a] !== x && (b.cancel(), b._start(a)));
        },
        reposition: function (a, c) {
            var d = b.current,
                e = d ? d.wrap : null,
                k;
            e && ((k = b._getPosition(c)), a && "scroll" === a.type ? (delete k.position, e.stop(!0, !0).animate(k, 200)) : (e.css(k), (d.pos = f.extend({}, d.dim, k))));
        },
        update: function (a) {
            var c = a && a.originalEvent && a.originalEvent.type,
                d = !c || "orientationchange" === c;
            d && (clearTimeout(D), (D = null));
            b.isOpen &&
                !D &&
                (D = setTimeout(
                    function () {
                        var e = b.current;
                        e &&
                            !b.isClosing &&
                            (b.wrap.removeClass("fancybox-tmp"), (d || "load" === c || ("resize" === c && e.autoResize)) && b._setDimension(), ("scroll" === c && e.canShrink) || b.reposition(a), b.trigger("onUpdate"), (D = null));
                    },
                    d && !u ? 0 : 300
                ));
        },
        toggle: function (a) {
            b.isOpen && ((b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView), u && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update());
        },
        hideLoading: function () {
            p.unbind(".loading");
            f("#fancybox-loading").remove();
        },
        showLoading: function () {
            var a, c;
            b.hideLoading();
            a = f(b.opts.tpl.loading).click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function (a) {
                27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel());
            });
            b.defaults.fixed || ((c = b.getViewport()), a.css({ position: "absolute", top: 0.5 * c.h + c.y, left: 0.5 * c.w + c.x }));
            b.trigger("onLoading");
        },
        getViewport: function () {
            var a = (b.current && b.current.locked) || !1,
                c = { x: q.scrollLeft(), y: q.scrollTop() };
            a && a.length ? ((c.w = a[0].clientWidth), (c.h = a[0].clientHeight)) : ((c.w = u && t.innerWidth ? t.innerWidth : q.width()), (c.h = u && t.innerHeight ? t.innerHeight : q.height()));
            return c;
        },
        unbindEvents: function () {
            b.wrap && v(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            q.unbind(".fb");
        },
        bindEvents: function () {
            var a = b.current,
                c;
            a &&
                (q.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update),
                (c = a.keys) &&
                    p.bind("keydown.fb", function (d) {
                        var e = d.which || d.keyCode,
                            k = d.target || d.srcElement;
                        if (27 === e && b.coming) return !1;
                        d.ctrlKey ||
                            d.altKey ||
                            d.shiftKey ||
                            d.metaKey ||
                            (k && (k.type || f(k).is("[contenteditable]"))) ||
                            f.each(c, function (c, k) {
                                if (1 < a.group.length && k[e] !== x) return b[c](k[e]), d.preventDefault(), !1;
                                if (-1 < f.inArray(e, k)) return b[c](), d.preventDefault(), !1;
                            });
                    }),
                f.fn.mousewheel &&
                    a.mouseWheel &&
                    b.wrap.bind("mousewheel.fb", function (c, e, k, g) {
                        for (var d = f(c.target || null), h = !1; d.length && !(h || d.is(".fancybox-skin") || d.is(".fancybox-wrap")); )
                            (h = (h = d[0]) && !(h.style.overflow && "hidden" === h.style.overflow) && ((h.clientWidth && h.scrollWidth > h.clientWidth) || (h.clientHeight && h.scrollHeight > h.clientHeight))), (d = f(d).parent());
                        0 !== e && !h && 1 < b.group.length && !a.canShrink && (0 < g || 0 < k ? b.prev(0 < g ? "down" : "left") : (0 > g || 0 > k) && b.next(0 > g ? "up" : "right"), c.preventDefault());
                    }));
        },
        trigger: function (a, c) {
            var d,
                e = c || b.coming || b.current;
            if (e) {
                f.isFunction(e[a]) && (d = e[a].apply(e, Array.prototype.slice.call(arguments, 1)));
                if (!1 === d) return !1;
                e.helpers &&
                    f.each(e.helpers, function (c, d) {
                        if (d && b.helpers[c] && f.isFunction(b.helpers[c][a])) b.helpers[c][a](f.extend(!0, {}, b.helpers[c].defaults, d), e);
                    });
            }
            p.trigger(a);
        },
        isImage: function (a) {
            return r(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },
        isSWF: function (a) {
            return r(a) && a.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function (a) {
            var c = {},
                d,
                e;
            a = m(a);
            d = b.group[a] || null;
            if (!d) return !1;
            c = f.extend(!0, {}, b.opts, d);
            d = c.margin;
            e = c.padding;
            "number" === f.type(d) && (c.margin = [d, d, d, d]);
            "number" === f.type(e) && (c.padding = [e, e, e, e]);
            c.modal && f.extend(!0, c, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } });
            c.autoSize && (c.autoWidth = c.autoHeight = !0);
            "auto" === c.width && (c.autoWidth = !0);
            "auto" === c.height && (c.autoHeight = !0);
            c.group = b.group;
            c.index = a;
            b.coming = c;
            if (!1 === b.trigger("beforeLoad")) b.coming = null;
            else {
                e = c.type;
                d = c.href;
                if (!e) return (b.coming = null), b.current && b.router && "jumpto" !== b.router ? ((b.current.index = a), b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === e || "swf" === e) (c.autoHeight = c.autoWidth = !1), (c.scrolling = "visible");
                "image" === e && (c.aspectRatio = !0);
                "iframe" === e && u && (c.scrolling = "scroll");
                c.wrap = f(c.tpl.wrap)
                    .addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + e + " fancybox-tmp " + c.wrapCSS)
                    .appendTo(c.parent || "body");
                f.extend(c, { skin: f(".fancybox-skin", c.wrap), outer: f(".fancybox-outer", c.wrap), inner: f(".fancybox-inner", c.wrap) });
                f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
                    c.skin.css("padding" + b, y(c.padding[a]));
                });
                b.trigger("onReady");
                if ("inline" === e || "html" === e) {
                    if (!c.content || !c.content.length) return b._error("content");
                } else if (!d) return b._error("href");
                "image" === e ? b._loadImage() : "ajax" === e ? b._loadAjax() : "iframe" === e ? b._loadIframe() : b._afterLoad();
            }
        },
        _error: function (a) {
            f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error });
            b._afterLoad();
        },
        _loadImage: function () {
            var a = (b.imgPreload = new Image());
            a.onload = function () {
                this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad();
            };
            a.onerror = function () {
                this.onload = this.onerror = null;
                b._error("image");
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading();
        },
        _loadAjax: function () {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(
                f.extend({}, a.ajax, {
                    url: a.href,
                    error: function (a, d) {
                        b.coming && "abort" !== d ? b._error("ajax", a) : b.hideLoading();
                    },
                    success: function (c, d) {
                        "success" === d && ((a.content = c), b._afterLoad());
                    },
                })
            );
        },
        _loadIframe: function () {
            var a = b.coming,
                c = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                    .attr("scrolling", u ? "auto" : a.iframe.scrolling)
                    .attr("src", a.href);
            f(a.wrap).bind("onReset", function () {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
                } catch (d) {}
            });
            a.iframe.preload &&
                (b.showLoading(),
                c.one("load", function () {
                    f(this).data("ready", 1);
                    u || f(this).bind("load.fb", b.update);
                    f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                    b._afterLoad();
                }));
            a.content = c.appendTo(a.inner);
            a.iframe.preload || b._afterLoad();
        },
        _preloadImages: function () {
            var a = b.group,
                c = b.current,
                d = a.length,
                e = c.preload ? Math.min(c.preload, d - 1) : 0,
                f,
                g;
            for (g = 1; g <= e; g += 1) (f = a[(c.index + g) % d]), "image" === f.type && f.href && (new Image().src = f.href);
        },
        _afterLoad: function () {
            var a = b.coming,
                c = b.current,
                d,
                e,
                k,
                g,
                l;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, c)) a.wrap.stop(!0).trigger("onReset").remove(), (b.coming = null);
                else {
                    c && (b.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    d = a.content;
                    e = a.type;
                    k = a.scrolling;
                    f.extend(b, { wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: c });
                    g = a.href;
                    switch (e) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector
                                ? (d = f("<div>").html(d).find(a.selector))
                                : v(d) &&
                                  (d.data("fancybox-placeholder") || d.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()),
                                  (d = d.show().detach()),
                                  a.wrap.bind("onReset", function () {
                                      f(this).find(d).length && d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder", !1);
                                  }));
                            break;
                        case "image":
                            d = a.tpl.image.replace(/\{href\}/g, g);
                            break;
                        case "swf":
                            (d = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>'),
                                (l = ""),
                                f.each(a.swf, function (a, b) {
                                    d += '<param name="' + a + '" value="' + b + '"></param>';
                                    l += " " + a + '="' + b + '"';
                                }),
                                (d += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>");
                    }
                    (v(d) && d.parent().is(a.inner)) || a.inner.append(d);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (!b.isOpened) f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    else if (c.prevMethod) b.transitions[c.prevMethod]();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages();
                }
        },
        _setDimension: function () {
            var a = b.getViewport(),
                c = 0,
                d,
                e = b.wrap,
                k = b.skin,
                g = b.inner,
                l = b.current;
            d = l.width;
            var h = l.height,
                n = l.minWidth,
                w = l.minHeight,
                p = l.maxWidth,
                q = l.maxHeight,
                u = l.scrolling,
                r = l.scrollOutside ? l.scrollbarWidth : 0,
                z = l.margin,
                A = m(z[1] + z[3]),
                t = m(z[0] + z[2]),
                x,
                B,
                v,
                E,
                C,
                H,
                D,
                F,
                I;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            z = m(k.outerWidth(!0) - k.width());
            x = m(k.outerHeight(!0) - k.height());
            B = A + z;
            v = t + x;
            E = G(d) ? ((a.w - B) * m(d)) / 100 : d;
            C = G(h) ? ((a.h - v) * m(h)) / 100 : h;
            if ("iframe" === l.type) {
                if (((I = l.content), l.autoHeight && I && 1 === I.data("ready")))
                    try {
                        I[0].contentWindow.document.location && (g.width(E).height(9999), (H = I.contents().find("body")), r && H.css("overflow-x", "hidden"), (C = H.outerHeight(!0)));
                    } catch (M) {}
            } else if (l.autoWidth || l.autoHeight) g.addClass("fancybox-tmp"), l.autoWidth || g.width(E), l.autoHeight || g.height(C), l.autoWidth && (E = g.width()), l.autoHeight && (C = g.height()), g.removeClass("fancybox-tmp");
            d = m(E);
            h = m(C);
            F = E / C;
            n = m(G(n) ? m(n, "w") - B : n);
            p = m(G(p) ? m(p, "w") - B : p);
            w = m(G(w) ? m(w, "h") - v : w);
            q = m(G(q) ? m(q, "h") - v : q);
            H = p;
            D = q;
            l.fitToView && ((p = Math.min(a.w - B, p)), (q = Math.min(a.h - v, q)));
            B = a.w - A;
            t = a.h - t;
            l.aspectRatio
                ? (d > p && ((d = p), (h = m(d / F))), h > q && ((h = q), (d = m(h * F))), d < n && ((d = n), (h = m(d / F))), h < w && ((h = w), (d = m(h * F))))
                : ((d = Math.max(n, Math.min(d, p))), l.autoHeight && "iframe" !== l.type && (g.width(d), (h = g.height())), (h = Math.max(w, Math.min(h, q))));
            if (l.fitToView)
                if ((g.width(d).height(h), e.width(d + z), (a = e.width()), (A = e.height()), l.aspectRatio))
                    for (; (a > B || A > t) && d > n && h > w && !(19 < c++); )
                        (h = Math.max(w, Math.min(q, h - 10))), (d = m(h * F)), d < n && ((d = n), (h = m(d / F))), d > p && ((d = p), (h = m(d / F))), g.width(d).height(h), e.width(d + z), (a = e.width()), (A = e.height());
                else (d = Math.max(n, Math.min(d, d - (a - B)))), (h = Math.max(w, Math.min(h, h - (A - t))));
            r && "auto" === u && h < C && d + z + r < B && (d += r);
            g.width(d).height(h);
            e.width(d + z);
            a = e.width();
            A = e.height();
            c = (a > B || A > t) && d > n && h > w;
            d = l.aspectRatio ? d < H && h < D && d < E && h < C : (d < H || h < D) && (d < E || h < C);
            f.extend(l, { dim: { width: y(a), height: y(A) }, origWidth: E, origHeight: C, canShrink: c, canExpand: d, wPadding: z, hPadding: x, wrapSpace: A - k.outerHeight(!0), skinSpace: k.height() - h });
            !I && l.autoHeight && h > w && h < q && !d && g.height("auto");
        },
        _getPosition: function (a) {
            var c = b.current,
                d = b.getViewport(),
                e = c.margin,
                f = b.wrap.width() + e[1] + e[3],
                g = b.wrap.height() + e[0] + e[2],
                e = { position: "absolute", top: e[0], left: e[3] };
            c.autoCenter && c.fixed && !a && g <= d.h && f <= d.w ? (e.position = "fixed") : c.locked || ((e.top += d.y), (e.left += d.x));
            e.top = y(Math.max(e.top, e.top + (d.h - g) * c.topRatio));
            e.left = y(Math.max(e.left, e.left + (d.w - f) * c.leftRatio));
            return e;
        },
        _afterZoomIn: function () {
            var a = b.current;
            a &&
                (((b.isOpen = b.isOpened = !0),
                b.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0),
                b.update(),
                (a.closeClick || (a.nextClick && 1 < b.group.length)) &&
                    b.inner.css("cursor", "pointer").bind("click.fb", function (c) {
                        f(c.target).is("a") || f(c.target).parent().is("a") || (c.preventDefault(), b[a.closeClick ? "close" : "next"]());
                    }),
                a.closeBtn &&
                    f(a.tpl.closeBtn)
                        // Ajit modified                       
                        .appendTo('.fancybox-overlay')  
                        .bind("click.fb", function (a) {
                            a.preventDefault();
                            b.close();
                        }),
                a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo('.fancybox-overlay').bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo('.fancybox-overlay').bind("click.fb", b.next)),
                b.trigger("afterShow"),
                a.loop || a.index !== a.group.length - 1)
                    ? b.opts.autoPlay && !b.player.isActive && ((b.opts.autoPlay = !1), b.play(!0))
                    : b.play(!1));
        },
        _afterZoomOut: function (a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null });
            b.trigger("afterClose", a);
        },
    });
    b.transitions = {
        getOrigPosition: function () {
            var a = b.current,
                c = a.element,
                d = a.orig,
                e = {},
                f = 50,
                g = 50,
                l = a.hPadding,
                h = a.wPadding,
                n = b.getViewport();
            !d && a.isDom && c.is(":visible") && ((d = c.find("img:first")), d.length || (d = c));
            v(d) ? ((e = d.offset()), d.is("img") && ((f = d.outerWidth()), (g = d.outerHeight()))) : ((e.top = n.y + (n.h - g) * a.topRatio), (e.left = n.x + (n.w - f) * a.leftRatio));
            if ("fixed" === b.wrap.css("position") || a.locked) (e.top -= n.y), (e.left -= n.x);
            return (e = { top: y(e.top - l * a.topRatio), left: y(e.left - h * a.leftRatio), width: y(f + h), height: y(g + l) });
        },
        step: function (a, c) {
            var d,
                e,
                f = c.prop;
            e = b.current;
            var g = e.wrapSpace,
                l = e.skinSpace;
            if ("width" === f || "height" === f)
                (d = c.end === c.start ? 1 : (a - c.start) / (c.end - c.start)),
                    b.isClosing && (d = 1 - d),
                    (e = "width" === f ? e.wPadding : e.hPadding),
                    (e = a - e),
                    b.skin[f](m("width" === f ? e : e - g * d)),
                    b.inner[f](m("width" === f ? e : e - g * d - l * d));
        },
        zoomIn: function () {
            var a = b.current,
                c = a.pos,
                d = a.openEffect,
                e = "elastic" === d,
                k = f.extend({ opacity: 1 }, c);
            delete k.position;
            e ? ((c = this.getOrigPosition()), a.openOpacity && (c.opacity = 0.1)) : "fade" === d && (c.opacity = 0.1);
            b.wrap.css(c).animate(k, { duration: "none" === d ? 0 : a.openSpeed, easing: a.openEasing, step: e ? this.step : null, complete: b._afterZoomIn });
        },
        zoomOut: function () {
            var a = b.current,
                c = a.closeEffect,
                d = "elastic" === c,
                e = { opacity: 0.1 };
            d && ((e = this.getOrigPosition()), a.closeOpacity && (e.opacity = 0.1));
            b.wrap.animate(e, { duration: "none" === c ? 0 : a.closeSpeed, easing: a.closeEasing, step: d ? this.step : null, complete: b._afterZoomOut });
        },
        changeIn: function () {
            var a = b.current,
                c = a.nextEffect,
                d = a.pos,
                e = { opacity: 1 },
                f = b.direction,
                g;
            d.opacity = 0.1;
            "elastic" === c && ((g = "down" === f || "up" === f ? "top" : "left"), "down" === f || "right" === f ? ((d[g] = y(m(d[g]) - 200)), (e[g] = "+=200px")) : ((d[g] = y(m(d[g]) + 200)), (e[g] = "-=200px")));
            "none" === c ? b._afterZoomIn() : b.wrap.css(d).animate(e, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn });
        },
        changeOut: function () {
            var a = b.previous,
                c = a.prevEffect,
                d = { opacity: 0.1 },
                e = b.direction;
            "elastic" === c && (d["down" === e || "up" === e ? "top" : "left"] = ("up" === e || "left" === e ? "-" : "+") + "=200px");
            a.wrap.animate(d, {
                duration: "none" === c ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function () {
                    f(this).trigger("onReset").remove();
                },
            });
        },
    };
    b.helpers.overlay = {
        defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !u, fixed: !0 },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function (a) {
            var c;
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            c = b.coming ? b.coming.parent : a.parent;
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(c && c.length ? c : "body");
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), (this.fixed = !0));
        },
        open: function (a) {
            var c = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick &&
                this.overlay.bind("click.overlay", function (a) {
                    if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : c.close(), !1;
                });
            this.overlay.css(a.css).show();
        },
        close: function () {
            q.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, { overlay: null, fixed: !1 });
        },
        update: function () {
            var a = "100%",
                b;
            this.overlay.width(a).height("100%");
            K ? ((b = Math.max(J.documentElement.offsetWidth, J.body.offsetWidth)), p.width() > b && (a = p.width())) : p.width() > q.width() && (a = p.width());
            this.overlay.width(a).height(p.height());
        },
        onReady: function (a, b) {
            var d = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            d || this.create(a);
            a.locked && this.fixed && b.fixed && ((b.locked = this.overlay.append(b.wrap)), (b.fixed = !1));
            !0 === a.showEarly && this.beforeShow.apply(this, arguments);
        },
        beforeShow: function (a, b) {
            b.locked &&
                !this.el.hasClass("fancybox-lock") &&
                (!1 !== this.fixPosition &&
                    f("*:not(object)")
                        .filter(function () {
                            return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap");
                        })
                        .addClass("fancybox-margin"),
                this.el.addClass("fancybox-margin"),
                (this.scrollV = q.scrollTop()),
                (this.scrollH = q.scrollLeft()),
                this.el.addClass("fancybox-lock"),
                q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
            this.open(a);
        },
        onUpdate: function () {
            this.fixed || this.update();
        },
        afterClose: function (a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
        },
    };
    b.helpers.title = {
        defaults: { type: "float", position: "bottom" },
        beforeShow: function (a) {
            var c = b.current,
                d = c.title,
                e = a.type;
            f.isFunction(d) && (d = d.call(c.element, c));
            if (r(d) && "" !== f.trim(d)) {
                c = f('<div class="fancybox-title fancybox-title-' + e + '-wrap">' + d + "</div>");
                switch (e) {
                    case "inside":
                        e = b.skin;
                        break;
                    case "outside":
                        e = b.wrap;
                        break;
                    case "over":
                        e = b.inner;
                        break;
                    default:
                        (e = b.skin), c.appendTo("body"), K && c.width(c.width()), c.wrapInner('<span class="child"></span>'), (b.current.margin[2] += Math.abs(m(c.css("margin-bottom"))));
                }
                c["top" === a.position ? "prependTo" : "appendTo"](e);
            }
        },
    };
    f.fn.fancybox = function (a) {
        var c,
            d = f(this),
            e = this.selector || "",
            k = function (g) {
                var l = f(this).blur(),
                    h = c,
                    k,
                    m;
                g.ctrlKey ||
                    g.altKey ||
                    g.shiftKey ||
                    g.metaKey ||
                    l.is(".fancybox-wrap") ||
                    ((k = a.groupAttr || "data-fancybox-group"),
                    (m = l.attr(k)),
                    m || ((k = "rel"), (m = l.get(0)[k])),
                    m && "" !== m && "nofollow" !== m && ((l = e.length ? f(e) : d), (l = l.filter("[" + k + '="' + m + '"]')), (h = l.index(this))),
                    (a.index = h),
                    !1 !== b.open(l, a) && g.preventDefault());
            };
        a = a || {};
        c = a.index || 0;
        e && !1 !== a.live ? p.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k) : d.unbind("click.fb-start").bind("click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this;
    };
    p.ready(function () {
        var a, c;
        f.scrollbarWidth === x &&
            (f.scrollbarWidth = function () {
                var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    b = a.children(),
                    b = b.innerWidth() - b.height(99).innerWidth();
                a.remove();
                return b;
            });
        f.support.fixedPosition === x &&
            (f.support.fixedPosition = (function () {
                var a = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
                a.remove();
                return b;
            })());
        f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") });
        a = f(t).width();
        L.addClass("fancybox-lock-test");
        c = f(t).width();
        L.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (c - a) + "px;}</style>").appendTo("head");
    });
})(window, document, jQuery);

    