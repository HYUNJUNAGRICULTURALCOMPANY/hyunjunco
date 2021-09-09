if ($(window).width() < 640) {
    $(document).ready(function () {
        $('.m_menu').click(function () {
            $(this).toggleClass('active');
            $('.menu').toggleClass('on')
        });
    });
}

var spot2 = $("header").offset().top;
$(".g_top").click(function () {
    $("html, body").animate({
        scrollTop: spot2
    }, 500);
});