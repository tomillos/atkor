// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


$(document).ready($(function() {

// Аккордион бокового меню
    $( ".accordion" ).accordion({
        active: false,
        heightStyle: "content",
        collapsible: true
    });

// Закрываем меню в мобильной версии через клик по пустой области
    $(document).click(function (event) {
        if ($(event.target).closest('#side-menu').length == 0 && $(event.target).closest('#side-menu-trigger').length == 0 && $(event.target).attr('id') != 'side-menu' && $(event.target).attr('id') != 'side-menu-trigger') {
        $("#side-menu").removeClass('side-menu-visible');
        };
    });
    $("#side-menu-trigger").click(function(event) {
        $("#side-menu").toggleClass('side-menu-visible');
    });
}));


// Яндекс-метрика
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
    try {
      w.yaCounter19443700 = new Ya.Metrika({id:19443700,
              webvisor:true,
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true});
    } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
    s = d.createElement("script"),
    f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");