var spot2 = $("header").offset().top;
$(".g_top").click(function () {
    $("html, body").animate({
        scrollTop: spot2
    }, 500);
});

$( document ).ready(function() {
    $('.s_submit').click(function(){
        $('.terms').addClass('on')
        $('body').addClass('stopscroll')
    });
    $('.x').click(function(){
        $('.terms').removeClass('on')
        $('body').removeClass('stopscroll')
    });
});
