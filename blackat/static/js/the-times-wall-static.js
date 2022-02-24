/*
1. preloader
2. hero scale IN
3. init animation
4. init elements and borders
5. borders ON resize
6. panels, panel elements
7. contact form
8. newsletter form
9. countdown date
10. countdown
11. morphext
12. text animation
13. borders resize
14. animations
15. hero slider
  15-1. owlCarousel HERO slider SLIDE
  15-2. owlCarousel HERO slider ZOOM
  15-3. owlCarousel HERO slider SPLIT
16. YTPlayer
17. GOOGLE ANALYTICS [for demonstration purposes only]
18. the Wall
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(1400);
        $("#preloader-status").delay(300).fadeOut("slow");
		
        // 2. hero scale IN
        $(".hero-bg").addClass("hero-bg-show");
		
        // 3. init animation
        $(initAnim);
    });
	
    // 4. init elements and borders
    $(initFadeInText);
    $(init);
	
    // 5. borders ON resize
    $(window).on("resize", function() {
        $(bordersResize);
    });
	
    // 6. panels, panel elements
    $(".open-menu-content, .main-navigation-button-close").on("click", function() {
        if ($(".panel-left, .panel-right").hasClass("open")) {
            $(".panel-left, .panel-right").removeClass("open");
            $(".panel-left, .panel-right").addClass("close");
            $("h6, .titleOT, #navigation").removeClass("close");
            $("h6, .titleOT, #navigation").addClass("open");
            $("nav a").removeClass("active");
            $("#overlay").fadeOut(800, "easeInOutQuad");
            $(".panel-left-overlay").fadeOut(600, "easeInOutQuad");
        } else {
            $(".panel-left, .panel-right").removeClass("close");
            $(".panel-left, .panel-right").addClass("open");
            $("h6, .titleOT, #navigation").removeClass("open");
            $("h6, .titleOT, #navigation").addClass("close");
            $("nav a").addClass("active");
            $("#overlay").fadeIn(800, "easeInOutQuad");
            $(".panel-left-overlay").fadeIn(1200, "easeInOutQuad");
        }
    });
	
    // 7. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 8. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
	
    // 9. countdown date
    var end = new Date("02/28/2022 06:00 PM"); // FORMAT: month/day/year time
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
	
    // 10. countdown
    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "EXPIRED.";
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        document.getElementById("countdown").innerHTML = days + "d, ";
        document.getElementById("countdown").innerHTML += hours + "h, ";
        document.getElementById("countdown").innerHTML += minutes + "m &amp; ";
        document.getElementById("countdown").innerHTML += seconds + "s left";
    }
    timer = setInterval(showRemaining, 1000);
	
    // 11. morphext
    $("#js-rotating").Morphext({
        animation: "pulse",
        separator: "|",
        speed: 4000,
        complete: function() {}
    });
	
    // 12. text animation
    function initFadeInText() {
        $(".text-animation").each(function(i) {
            $(this).addClass(".text-animation" + (i + 1));
        });
    }
	
    // 13. borders resize
    function bordersResize() {
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "50%");
        var widthFramework = $(".border-top-1").width();
        var widthTop = $(".center-space-top span").width();
        var widthBottom = $(".center-space-bottom span").width();
        var calculateTop = widthFramework - (widthTop / 2) - 8;
        var calculateBottom = widthFramework - (widthBottom / 2) - 8;
        $(".border-top-1").width(calculateTop);
        $(".border-top-2").width(calculateTop);
        $(".border-bottom-1").width(calculateBottom);
        $(".border-bottom-2").width(calculateBottom);
    }
	
    // 14. animations
    function initAnim() {
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "50%");
        $(".border-left, .border-right").css("height", "100%");
        var heightLaterals = $(".border-right").height();
        $(".border-left, .border-right").css("height", "0px");
        $(".border-left, .border-right").css("top", (heightLaterals / 2) + "px");
        var widthFramework = $(".border-top-1").width();
        var widthTop = $(".center-space-top span").width();
        var widthBottom = $(".center-space-bottom span").width();
        var calculateTop = widthFramework - (widthTop / 2) - 8;
        var calculateBottom = widthFramework - (widthBottom / 2) - 8;
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "0%");
        $(".border-left, .border-right").animate({
            height: heightLaterals + "px",
            top: "0px"
        }, 600, function() {
            $(".border-left, .border-right").css({
                height: "100%"
            });
            $(".border-top-1").animate({
                width: (calculateTop - 25) + "px"
            }, 600);
            $(".border-top-2").animate({
                width: (calculateTop - 25) + "px"
            }, 600);
            $(".border-bottom-1").animate({
                width: (calculateBottom - 25) + "px"
            }, 600);
            $(".border-bottom-2").animate({
                width: (calculateBottom - 25) + "px"
            }, 600);
            $(".center-space-top, .center-space-bottom, .titleOT, nav, h6").stop(true, true).delay(500).animate({
                opacity: 1
            }, 3000);
			$("#wall-images-wrapper").stop(true, true).delay(500).animate({
                opacity: 1
            }, 600);
        });
    }

    function init() {
        $(".center-space-top, .center-space-bottom, .titleOT, nav, h6, #wall-images-wrapper").css("opacity", "0");
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "0%");
        $(".border-left, .border-right").css("height", "0px");
    }
	
    // 15. hero slider
    // 15-1. owlCarousel HERO slider SLIDE
    $(".hero-slider-slide").owlCarousel({
        autoPlay: true,
        navigation: true,
        pagination: false,
        transitionStyle: false,
        singleItem: true,
        items: 1,
        autoHeight: true,
        stopOnHover: false
    });
    // 15-2. owlCarousel HERO slider ZOOM
    $(".hero-slider-zoom").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: "fadeUp", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: true,
        stopOnHover: false
    });
    // 15-3. owlCarousel HERO slider SPLIT
    $(".hero-slider-split").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: false,
        singleItem: false,
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsMobile: [680, 2],
        autoHeight: true,
        stopOnHover: false
    });
	
	
	// 16. YTPlayer
    $("#background-video").YTPlayer({
        videoId: "ga-LSXrrWNI", // DEMO URL is: https://www.youtube.com/watch?v=ga-LSXrrWNI
        mute: true,             // options: true, false
        pauseOnScroll: false,
        repeat: true,
        fitToBackground: true,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: "transparent",
            branding: 0,
            rel: 0,
            autohide: 0
        }
    });


});


// 17. GOOGLE ANALYTICS [for demonstration purposes only]
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-3033286-18', 'auto');
ga('send', 'pageview');


// 18. the Wall
window.addEvent("domready", function() {
    var imagewall = [
        ["the-wall/1.jpg", [
            ["the-wall/1-2.jpg"]
        ]],
        ["the-wall/2.jpg", [
            ["the-wall/2-2.jpg"]
        ]],
        ["the-wall/3.jpg", [
            ["the-wall/3-2.jpg"]
        ]],
        ["the-wall/4.jpg", [
            ["the-wall/4-2.jpg"]
        ]],
        ["the-wall/5.jpg", [
            ["the-wall/5-2.jpg"]
        ]],
        ["the-wall/6.jpg", [
            ["the-wall/6-2.jpg"]
        ]],
        ["the-wall/7.jpg", [
            ["the-wall/7-2.jpg"]
        ]],
        ["the-wall/8.jpg", [
            ["the-wall/8-2.jpg"]
        ]],
        ["the-wall/9.jpg", [
            ["the-wall/9-2.jpg"]
        ]],
        ["the-wall/10.jpg", [
            ["the-wall/10-2.jpg"]
        ]],
        ["the-wall/11.jpg", [
            ["the-wall/11-2.jpg"]
        ]],
        ["the-wall/12.jpg", [
            ["the-wall/12-2.jpg"]
        ]],
		["the-wall/13.jpg", [
            ["the-wall/13-2.jpg"]
        ]],
        ["the-wall/14.jpg", [
            ["the-wall/14-2.jpg"]
        ]],
        ["the-wall/15.jpg", [
            ["the-wall/15-2.jpg"]
        ]],
        ["the-wall/16.jpg", [
            ["the-wall/16-2.jpg"]
        ]],
        ["the-wall/17.jpg", [
            ["the-wall/17-2.jpg"]
        ]],
        ["the-wall/18.jpg", [
            ["the-wall/18-2.jpg"]
        ]],
        ["the-wall/19.jpg", [
            ["the-wall/19-2.jpg"]
        ]],
        ["the-wall/20.jpg", [
            ["the-wall/20-2.jpg"]
        ]],
        ["the-wall/21.jpg", [
            ["the-wall/21-2.jpg"]
        ]],
        ["the-wall/22.jpg", [
            ["the-wall/22-2.jpg"]
        ]],
        ["the-wall/23.jpg", [
            ["the-wall/23-2.jpg"]
        ]],
        ["the-wall/24.jpg", [
            ["the-wall/24-2.jpg"]
        ]],
        ["the-wall/25.jpg", [
            ["the-wall/25-2.jpg"]
        ]],
        ["the-wall/26.jpg", [
            ["the-wall/26-2.jpg"]
        ]],
        ["the-wall/27.jpg", [
            ["the-wall/27-2.jpg"]
        ]],
        ["the-wall/28.jpg", [
            ["the-wall/28-2.jpg"]
        ]],
        ["the-wall/29.jpg", [
            ["the-wall/29-2.jpg"]
        ]],
        ["the-wall/30.jpg", [
            ["the-wall/30-2.jpg"]
        ]],
        ["the-wall/31.jpg", [
            ["the-wall/31-2.jpg"]
        ]],
        ["the-wall/32.jpg", [
            ["the-wall/32-2.jpg"]
        ]],
        ["the-wall/33.jpg", [
            ["the-wall/33-2.jpg"]
        ]],
        ["the-wall/34.jpg", [
            ["the-wall/34-2.jpg"]
        ]],
        ["the-wall/35.jpg", [
            ["the-wall/35-2.jpg"]
        ]],
        ["the-wall/36.jpg", [
            ["the-wall/36-2.jpg"]
        ]],
        ["the-wall/plus-1.jpg", [
            ["the-wall/plus-1-2.jpg"] // an extra image to compensate for the gap
        ]]
    ];
    var maxLength = 36;
    var wallFluid = new Wall("wall", {
        "draggable": true,
		"slideshow": false, // options: true, false
        "speed": 1000,
        "showDuration": 4000,
        "transition": Fx.Transitions.Quad.easeOut,
        "inertia": true,
        "autoposition": true,
        "width": 301,
        "height": 320,
        "rangex": [-100, 100],
        "rangey": [-100, 100],
        callOnUpdate: function(items) {
            var root = Math.ceil(Math.sqrt(maxLength));
            document.id("wall").setStyle("margin-left", 0);
            var i = 0;
            (function() {
                try {
                    var position = ((Math.abs(items[i].y) % root) * root) + (Math.abs(items[i].x) % root);
                    if (position > maxLength) {
                        position = Math.floor(Math.random() * maxLength);
                    }
                    var file = imagewall[position][0];
                    var img = new Element("img[src=" + file + "]");
                    img.inject(items[i].node).fade("hide").fade("in");
                    var list = new Element("ul");
                    list.setProperty("class", "slideshow")
                    for (var j = 0; j < imagewall[position][1].length; j++) {
                        var slide = new Element("li");
                        new Element("img", {
                            src: imagewall[position][1][j][0]
                        }).inject(slide);
                        var desc = new Element("span", {
                            html: imagewall[position][1][j][1]
                        });
                        var div = new Element("div");
                        div.setProperty("class", "wall-item-description");
                        desc.inject(div);
                        div.inject(slide);
                        slide.inject(list);
                    }
                    list.inject(items[i].node);
                    var stop = false;
                    var firstSlide = true;
                    items[i].node.addEvents({
                        mouseenter: function(event) {
                            list.getChildren("li").setStyles({
                                "visibility": "hidden",
                                "opacity": 0
                            });
                            stop = false;
                            if (imagewall[position][1].length) {
                                (function(item) {
                                    item.fade("in");
                                    if (firstSlide) {
                                        delay = 1000;
                                        firstSlide = false;
                                    } else {
                                        delay = 2000;
                                    }
                                    if (item.getNext("li") != null) {
                                        var tmpslide = arguments.callee;
                                        (function() {
                                            item.fade("out");
                                            if (!stop) tmpslide(item.getNext("li"));
                                        }).delay(delay);
                                    } else if (item.getSiblings("li").length > 0) {
                                        var tmpslide = arguments.callee;
                                        (function() {
                                            item.fade("out");
                                            if (!stop) tmpslide(item.getSiblings("li").pop());
                                        }).delay(delay);
                                    }
                                })(new Element(list.getFirst("li")));
                                img.fade("out");
                            }
                            return false;
                        },
                        mouseleave: function() {
                            stop = true;
                            firstSlide = true;
                            if (imagewall[position][1].length) {
                                list.getChildren("li").fade("out");
                                img.fade("in");
                            }
                        }
                    });
                    i++;
                    if (i < items.length) {
                        var tmp = arguments.callee;
                        (function() {
                            tmp();
                        }).delay(10);
                    } else {}
                } catch (e) {}
            })();
        }
    });
    window.setTimeout(function() {
        wallFluid.initWall();
    }, 500);
});