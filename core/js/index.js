//Loading//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
        //View Height Fix//
        var correctedHeight = $(window).outerHeight() + "px";
        var correctedHeight2x = $(window).outerHeight()*2.1 + "px";
        console.log(correctedHeight);
        $('.parallax-container').css({ height: correctedHeight });
        $('.cover-parallax').css({ height: correctedHeight2x });
        $('.parallax-text-wrapper').css({ minHeight: correctedHeight });
        $('.text-section').css({ minHeight: correctedHeight });
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('body-container').style.opacity="1";
      },500);
  }
}

//jQuery//
$(document).ready(function (){
    //Arrow Down Script//
    $(".down").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $(".nav-to").offset().top
        }, 1700, 'easeInOutExpo');
    });
    
    //Smooth Scrolling//
    $("html").easeScroll({
        frameRate: 120,
        animationTime: 1350,
        stepSize: 75,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 1,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 200,
        touchpadSupport: true,
        fixedBackground: true
    });
    
    //Animated Arrow//
    (function($) {
    $.fn.seqfx = function() {
        var elements = this,
            l = elements.length,
            i = 0;

        function execute() {
            var current = $(elements[i]);
            i = (i) % l;

            current
                .fadeIn(350)
                .delay(800)
                .fadeOut(350, execute);
        }
        execute();
        return this;
        };
    }(jQuery));
    $(".down, h4").seqfx();
});