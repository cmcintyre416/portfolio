(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var win = $(window);

var allMods = $(".hidden");

allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function (event) {

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});


$(document).ready(function () {

    $("a").on('click', function (event) {

        if (this.hash !== "") {
            
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        } // End if
    });

    $(".header__close").hide();
    $(".header__hiddenMenu").hide();
    $(".header__hamburgerMenu").click(function () {
        $(".header__hiddenMenu").slideToggle("slow", function () {
            $(".header__hamburgerMenu").hide();
            $(".header__close").show();
        });
    });

    $(".header__close").click(function () {
        $(".header__hiddenMenu").slideToggle("slow", function () {
            $(".header__close").hide();
            $(".header__hamburgerMenu").show();
        });
    });

    $(".header__menuItem").click(function () {
        $(".header__hiddenMenu").slideToggle("slow", function () {
            $(".header__close").hide();
            $(".header__hamburgerMenu").show();
        });
    })
});

