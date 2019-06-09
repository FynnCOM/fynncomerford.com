(function(){
'use strict';


function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

loadScript("files/js/jquery-2.1.4.min.js");
loadScript("files/js/jquery.pace.js");
loadScript("files/js/jquery.easing.1.3.js");
loadScript("files/js/jquery.easing.compatibility.js");
loadScript("files/js/jquery.visible.min.js");
loadScript("files/js/tweenMax.js");
loadScript("files/js/jquery.backgroundparallax.min.js");
loadScript("files/js/jquery.owl.carousel.js");
loadScript("files/js/jquery.wolf.min.js");
loadScript("files/js/siriwave.js");
loadScript("files/js/web-animations.min@2.3.1.js");
loadScript("files/js/muuri.min@0.7.1.js");
loadScript("files/js/scripts.js");


});