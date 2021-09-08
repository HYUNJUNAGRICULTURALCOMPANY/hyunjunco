//모바일 JS
if ($(window).width() < 640) {
    $(document).ready(function () {
        $('.m_menu').click(function () {
            $(this).toggleClass('active');
            $('.menu').toggleClass('on')
        });
    });
}

$(function () {
    var $main_visual = $(".main_visual .main_slider");
    var $visualList = $(".main_visual .main_slider .slide_box > div");
    var $visual_length = $visualList.length;
    var _visualNum = 0;
    var _visualIn = 0;
    var setT = 0;
    var bool = true;


    function autoVisual() {
        _visualIn = setInterval(function () {
            if (_visualNum > $visual_length - 2) {
                _visualNum = 0;
            } else {
                _visualNum++;
            }
            fadeEvent(_visualNum)
        }, 7000)
    }
    autoVisual()

    function fadeEvent(targets) {
        $visualList.removeClass("on");
        $main_visual.eq(targets).addClass("on");
        $visualList.eq(targets).addClass("on");
        $(".thum li").removeClass("on").eq(targets).addClass("on");
    }
    $visualList.each(function (i) {
        $(".thum").append("<li></li>")
        $(".thum li").eq(0).addClass("on")
    })
    $(".thum").append("<li class='last'></li>")

    $(".thum li.last").click(function () {
        clearInterval(_visualIn);
        clearTimeout(setT)
        if (!$(this).hasClass("play")) {
            $(this).addClass("play");
        } else {
            $(this).removeClass("play");
            autoVisual()
        }
        bool = false;
    })
    $(".thum li").click(function () {
        var idx = $(this).index();
        if ($visual_length > idx) {
            $(".thum li").removeClass("on").eq(idx).addClass("on");
            clearInterval(_visualIn);
            clearTimeout(setT)
            fadeEvent(idx);
            setT = setTimeout(function () {
                autoVisual()
            }, 3000)
            _visualNum = idx;
        }
    })
    $(".main_visual button").click(function () {
        clearInterval(_visualIn)
        if ($(this).hasClass("slick-prev")) {
            (_visualNum < 1) ? _visualNum = $visual_length - 1 : _visualNum--;
        } else {
            (_visualNum > $visual_length - 2) ? _visualNum = 0 : _visualNum++;
        }
        fadeEvent(_visualNum);
        autoVisual();
    })
    $(".main_visual .main_slider .slide_box > div").eq(0).addClass("on");

    $('.sub_visual').addClass('on');
    $('.sub_visual .view_paging2 > span').click(function () {
        $('.sub_visual .view_paging2 ul').fadeToggle(100);
    })
});

function lang_mode_set(pa) {

    var param = 'LANG=' + pa;

    $.ajax({
        url: '/bin/lang_select.php',
        type: 'POST',
        data: param,
        error: function () {
            alert("Error loading");
        },
        success: function (p_data) {
            location.reload();
        }
    });
}


//사이드 스크롤 페이지 네이션//

$(".side_nav div").each(function () {
    var thisOffset = $("." + $(this).data('id')).offset().top;

    $(this).click(function () {
        $("html, body").animate({
            scrollTop: thisOffset
        }, 1000);
        $(this).addClass('on');
    });

});
$(document).scroll(function () {
    var scrolltop = $(window).scrollTop();
    $("header,section, footer").each(function () {
        if (scrolltop >= $(this).offset().top) {
            $("div.side_nav div[data-id=" + $(this).attr('class') + "]").addClass('on').siblings().removeClass('on');
        }
    });
});

var spot1 = $("footer").offset().top;
var spot2 = $("header").offset().top;
$(".g_footer").click(function () {
    $("html, body").animate({
        scrollTop: spot1
    }, 500);
});
$(".g_top").click(function () {
    $("html, body").animate({
        scrollTop: spot2
    }, 500);
});

//section2 슬라이더//

//-outline slider-//
var swiper = new Swiper(".sec_con", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
  });
//-inner slide-//
var swiper = new Swiper(".list", {
    direction: "vertical",
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});