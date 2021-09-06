var spot2 = $("header").offset().top;
$(".g_top").click(function () {
    $("html, body").animate({
        scrollTop: spot2
    }, 500);
});
$(function () {
    var lastScroll = 0;
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > 1300) {
            $(".sec3").addClass("on");
        }
        else {
            $("sec3").removeClass("on");
        }
        lastScroll = scroll;
    });
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > 1700) {
            $(".sec4").addClass("on");
        }
        else {
            $(".sec4").removeClass("on");
        }
        lastScroll = scroll;
    });
});
