$(document).ready(function () {
    // Hamburger Menu
    var forEach = function (t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) &&
                    o.call(r, t[c], c, t);
        else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
    };
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener(
                "click",
                function () {
                    this.classList.toggle("is-active");
                },
                false
            );
        });
    }
    $(".hamburger").on("click", function () {
        $(".theme-header").toggleClass("theme-header--is-open");
        $("body").toggleClass("pushy-open-right");
        // $(".theme-header").toggleClass("dropdown-open");
    });

    // Navbar Toggler
    $(".navbar-toggler").click(function () {
        $(this).toggleClass("show");
        var x = document.getElementsByClassName("navbar-toggler");
        if ($(this).hasClass("show")) {
            x[0].innerHTML = "Hide Filters";
            $(this).parent().css("border-width", "0px");
        } else {
            x[0].innerHTML = "Show Filters";
            $(this).parent().css("border-width", "1px");
        }
    });
});

// Headroom
// (function () {
//     var header = document.querySelector("#header");

//     if (header) {
//         if (window.location.hash) {
//             header.classList.add("headroom--unpinned");
//         }

//         var headroom = new Headroom(header, {
//             tolerance: {
//                 down: 30,
//                 up: 10,
//             },
//             offset: 1,
//         });
//         headroom.init();
//     }
// })();

// Removing :hover for small devices
function hasTouch() {
    return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );
}
if (hasTouch()) {
    // remove all :hover stylesheets
    try {
        // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(":hover")) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
