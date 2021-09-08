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

$(".tab_contents").hide().eq(0).show();
$(".push").click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).fadeIn(1000)
        .siblings('.tab_contents').fadeOut(300);
});
